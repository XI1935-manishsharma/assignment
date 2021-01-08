import React, { useEffect } from 'react';
import { getAccountList } from './Store/createAccount/action'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'


const AccountList = () => {
  const dispatch = useDispatch();
  const budgetList = useSelector(state => state.budgetList.budgetList[0].id);
  const accountList = useSelector(state => state.accountList.accountList)

  useEffect(() => {
    dispatch(getAccountList(budgetList))
  }, [])
console.log('accountList', accountList)
  return (
    <div className="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Balance</th>
            <th scope="col">Cleared Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.balance}</td>
              <td>{item.cleared_balance}</td>
            </tr>
          )
          )}

        </tbody>
      </table>
    </div>
  )
}

export default AccountList;