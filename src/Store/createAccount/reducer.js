
const initialState = {
    loading: false,
    accountList : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case "GET_ACCOUNT_LIST":
           return{
               ...state,
               accountList : action.payload
           }
        default: return state
    }
}

export default reducer