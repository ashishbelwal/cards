<template>
  <div class="navContent">
    <ul>
        <li v-for="item in items" :key="item.title">
          <router-link :to="{ name: item.to }">
          <template>
            <div>
              <inline-svg :src="require('../assets/' + item.icon)" alt="" />
              <h5>{{item.title}}</h5>
            </div>
          </template>
        </router-link>
        
        </li>
    </ul>
  </div>
</template>


<script>
  import InlineSvg from 'vue-inline-svg';
  export default {
    name: 'NavContent',
    components: {
        InlineSvg,
    },
    data: () => ({
      items: [
          { title: 'Home', icon: 'Home.svg', to:'Home', active: false },
          { title: 'Cards', icon: 'Card.svg', to:'Cards', active: false},
          { title: 'Payments', icon: 'Payments.svg', to:'Payments', active: false },
          { title: 'Credit', icon: 'Credit.svg', to:'Credit', active: false },
          { title: 'Settings', icon: 'Account.svg', to:'Settings', active: false },
        ],
    }),
    props: ['source'],
  }
</script>

<style lang="scss">
  a {
      text-decoration: none;
  }
  .navContent{
    margin-top: 81px;
    ul{
      margin: 0px;
      li{
        list-style-type: none;
        margin-bottom: 60px;
        align-items: center;
        &:hover{
          cursor: pointer;
          h5{
            color: rgba(1, 209, 103, 1);
            font-weight: 500;
          }
        }
        div{
          display: flex;
          align-items: center;
          svg{
          margin-right: 16px;
          }
          h5{
            color: #fff;
            font-weight: 400;
            font-size: 16px;
          }
        }
        
      }
      .router-link-exact-active{
        path{
          fill: rgba(1, 209, 103, 1);
        }
        h5{
          color: rgba(1, 209, 103, 1);
          font-weight: 600;
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .navContent{
      margin: 0;
      ul{
        display: flex;
        width: 100%;
        padding: 0!important;
        justify-content: space-around;
        li{
          margin: 0;
          div{
              align-items: center;
              flex-direction: column;
              svg{
                margin-right: 0;
                margin-bottom: 5px;
                path{
                  fill: #DDDDDD;
                  stroke: none;
                }
              }
              h5{
                font-size: 13px;
                color: #DDDDDD;
              }
          }
        }
      }
    }
  }
</style>
