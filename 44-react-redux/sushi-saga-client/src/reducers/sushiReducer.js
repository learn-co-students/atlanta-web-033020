export default (state={
  sushis: [],
  offset: 0
 },action) => {

  console.log(action)

  switch (action.type) {

    case 'GET_SUSHI':
      return {
        ...state,
        sushis: action.sushis
      }

    case 'GET_MORE_SUSHI':
      const newOffset = state.offset + 4 >= state.sushis.length ? 0 : state.offset + 4

      return {
        ...state,
        offset: newOffset
      }
      
    default:
      return state
  }
}
