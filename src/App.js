import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getBudgetList, getBudgetList1} from './Store/budgetList/actions'
import BudgetList from './budgetList'
import CreateAccount from './createAccount'
import Navbar from './navbar'
import AccountList from './accountList'
const App = () => {

  const dispatch = useDispatch();
  const test = useSelector(state => state.budgetList.loading)

  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/create-account" component={CreateAccount}/>
       <Route exact path="/account-list" component={AccountList}/>
       <Route exact path="/" component={BudgetList}/>
     </Switch>
    </Router> 
  );
}

export default App;
