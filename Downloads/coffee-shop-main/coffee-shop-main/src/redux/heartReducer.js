const heartReducer = (state = [], action) => {
  console.log(action.payload)
    switch (action.type) {
      case "BEYEN":
          return state = [...state,action.payload];
      case "BEYENME":
          return state = state.filter(index => index.id !== action.payload)
        default:
          return state
    }
}
export default heartReducer