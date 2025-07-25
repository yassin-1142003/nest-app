const dataReducers = (state = 1, action) => {
    switch (action.type){
        case "ARTIR":
            return state + action.payload;
        case "AZALT":
            return state - action.payload;
            default:
                return state
    }
}
export default dataReducers