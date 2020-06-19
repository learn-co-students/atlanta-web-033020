export default (state={
  eaten: [],
  wallet: 100
 },action) => {

  switch (action.type) {

    case 'EAT_SUSHI':

      if(action.sushi.price <= state.wallet && !state.eaten.includes(action.sushi.id)){
        return {
          ...state,
          eaten: [...state.eaten, action.sushi.id],
          wallet: state.wallet - action.sushi.price
        }
      }

    default:
      return state
  }
}
