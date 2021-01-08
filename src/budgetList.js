import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList1} from './Store/budgetList/actions'
import {Link} from 'react-router-dom'


const BudgetList = () => {
    const dispatch = useDispatch();
   const budgetList  = useSelector(state => state.budgetList.budgetList);
   useEffect(()=>{
     dispatch(getBudgetList1())
   },[])
   console.log("budgetList", budgetList)
    return (    
        <div className="container">
        {budgetList.map((item, i)=>(
        <div className="card col-md-4" key={i}>
                <div>    
               <h5 className="card-title bg-dark">{item.name}</h5>
                  <div className="card-body">
                    <div className="row">  
                     <div className="col-md-6"> 
                        <label>First Month</label>
                        <p>{item.first_month}</p>
                      </div>
                      <div className="col-md-6"> 
                        <label>Last Month</label>
                        <p>{item.last_month}</p>
                      </div>
                      </div>
                      <div>
                      <Link className="nav-link" to="/create-account">Create Account</Link>

                      </div>
                  </div>
                </div>
            
        </div>
)
)}
</div>
    )
}

export default BudgetList;