const boxReducer = (state = [], action) => {
    switch (action.type) {
       case "GELEN_DATA":
           return action.payload
      default:
         return state
    }
  }
  
  export default boxReducer