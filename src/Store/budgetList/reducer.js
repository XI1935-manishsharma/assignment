
const initialState = {
    loading: false,
    disabled: false,
    headerBtn : false,
    budgetList : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BUDGET_LIST":
            return {
                ...state,
                loading: action.payload
            }
       case "GET_BUDGET_LIST1":
           return{
               ...state,
              budgetList : action.payload
           }
        default: return state
    }
}

export default reducer