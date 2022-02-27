<template>
  <div class="addNewCard">
    <v-container>
        <v-row>
            <PageTitle>
                <h1>Add new card</h1>
            </PageTitle>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
                <template>
                    <validation-observer
                        ref="observer"
                        v-slot="{ invalid }"
                    >
                        <form @submit.prevent="submit">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Name"
                            rules="required|max:20"
                        >
                            <v-text-field
                            v-model="name"
                            :counter="20"
                            :error-messages="errors"
                            label="Name"
                            required
                            ></v-text-field>
                        </validation-provider>

                        <v-btn
                            class="mr-4"
                            type="submit"
                            :disabled="invalid"
                        >
                            submit
                        </v-btn>
                        <v-btn @click="clear">
                            clear
                        </v-btn>
                        </form>
                    </validation-observer>
                </template>
            </v-col>
        </v-row>
    </v-container>
  </div>
  
</template>

<script>
    import { mapActions } from "vuex";
    import { required, max,  } from 'vee-validate/dist/rules'
    import PageTitle from "../views/sections/PageTitle.vue";
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
    setInteractionMode('eager')
    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })
    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

  export default {
    name: 'Credit',
    components: {
        PageTitle,
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        name: '',
    }),
    methods: {
         ...mapActions(["addCard"]),
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        submit () {
            this.$refs.observer.validate();
            let content = {
                name: this.name,
                id: Math.floor(100000 + Math.random() * 900000),
                cardNumber: Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000) + " " +Math.floor(1000 + Math.random() * 9000),
                cardLastNumber: '',
                expDate: Math.floor(1 + Math.random() * 12) + "/" + Math.floor(22 + Math.random() * 34),
                color: this.getRandomColor(),
                freeze: false
            }
            content.cardLastNumber = content.cardNumber.split(" ")[3];
            this.addCard(content);
            this.$router.push('/')
        },
        clear () {
            this.name = ''
        }
    }
  }
</script>
<style lang="scss">
  .addNewCard{
      .container{
          margin-bottom: 50px;
      }
      .col-12{
          padding: 0
      }
  }
  @media only screen and (max-width: 768px){
      form{
        position: absolute;
        width: 100%;
        padding: 20px;
        top: 50%;
      }
  }
</style>
