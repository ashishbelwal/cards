const state = {
    cards: [
        {
          id: 0,
          name: "Mark Henry",
          cardNumber: "4444 3333 2222 1111",
          cardLastNumber: "1111",
          expDate: '12/20',
          color: '#01d167',
          freeze: false
        },
        {
          id: 1,
          name: "Andrew Thomas",
          cardNumber: "4444 3333 2222 1111",
          cardLastNumber: "1111",
          expDate: '12/20',
          color: '#012ed1',
          freeze: false
        },
        {
          id: 2,
          name: "Tom Td",
          cardNumber: "4444 3333 2222 1111",
          cardLastNumber: "1111",
          expDate: '12/20',
          color: '#d101ae',
          freeze: false
        }
    ],
  };
  
  const getters = {
    allCards: state => state.cards,
  };
  
  const actions = {
    async addCard({ commit }, content) {
        commit('newCard', content);
    },
    async freeze({commit}, id){
      commit('freezeCard', id)
    },
    async deleteCard({commit}, id){
      commit('deleteCardM', id)
    }
  };
  
  const mutations = {
    newCard: (state, card) => state.cards.unshift(card),
    freezeCard: (state, id) => {
      console.log(id)
      state.cards.map((card, index) => {
        if(card.id == id){
          state.cards[index].freeze = !state.cards[index].freeze
        }
      })
    },
    deleteCardM: (state, id) => {
      state.cards.map((card, index) => {
        if(card.id == id){
          state.cards.splice(index, 1)
          console.log(state.cards)
        }
      })
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  };