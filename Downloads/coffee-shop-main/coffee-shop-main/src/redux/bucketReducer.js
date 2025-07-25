const bucketReducer = (state = [], action) => {
    switch (action.type) {
      case "SEBETE_ELAVE_ET":
          return state = [...state,action.payload];
      case "SEBETDEN_SIL":
          return state = state.filter(index => index.id !== action.payload)
        default:
          return state
    }
}
export default bucketReducer