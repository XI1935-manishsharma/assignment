import axios from 'axios';

const token = "7fe20d5bf726ae569e8cb25187a089b10888d411ad062ccb61d7ec19879b44c7"

export const getBudgetList = (flag) => {
    console.log(flag)
    return {
      type: "GET_BUDGET_LIST",
      payload: flag,
    }
  }

  export const getBudgetList1 = () => {
    return(dispatch)=>{
      axios.get("https://api.youneedabudget.com/v1/budgets" , {
        headers: {
            'Authorization': `Bearer ${token}` 
          }
      })
       .then(respsonse => {
           dispatch({
               type:"GET_BUDGET_LIST1",
               payload:respsonse.data.data.budgets
           })
       })
       .catch(err =>{
           console.log(err)
       })
    }
 
  }

