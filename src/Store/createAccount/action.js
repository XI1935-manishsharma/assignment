import axios from 'axios';
const token = "7fe20d5bf726ae569e8cb25187a089b10888d411ad062ccb61d7ec19879b44c7"

export const postAccount = (data) =>{
        return(dispatch)=>{
        axios({
            url : `https://api.youneedabudget.com/v1/budgets/${data.budget_id}/accounts`,
            method:'post',
            data : {
                account:{
                    name: data.values.name,
                    balance: data.values.account,
                    type : "checking",
                }
            },  
          headers: {
              'Accept':'application/json',
              'Authorization': `Bearer ${token}` ,
             'Content-Type': 'application/json'
            }
        })
         .then(respsonse => {
             console.log(respsonse.data)
         })
         .catch(err =>{
             console.log(err)
         })
        }
}

export const getAccountList = (data) =>{
    return(dispatch)=>{
        axios.get(`https://api.youneedabudget.com/v1//budgets/${data}/accounts`, {
            headers: {
                'Authorization': `Bearer ${token}` 
              }
          })
           .then(resp => {
               dispatch({
                   type:"GET_ACCOUNT_LIST",
                   payload:resp.data.data.accounts
               })
           })
           .catch(err =>{
               console.log(err)
           })
    }
}