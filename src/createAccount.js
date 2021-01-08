import React, { useState } from 'react';
import { postAccount } from './Store/createAccount/action'
import { useDispatch, useSelector } from "react-redux";

const CreateAccount = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: '',
        account: '',
    })
    const onChangeHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const budget_id = useSelector(state => state.budgetList && state.budgetList.budgetList[0].id)

    const submitHandlerAccount = (e) => {
        e.preventDefault()
        let data = {
            budget_id,
            values,
        }
        dispatch(postAccount(data))
    }
    return (
        <div className="container">
            <form onSubmit={submitHandlerAccount}>
                <div className="form-group">
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={values.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Balance: </label>
                    <input
                        type="number"
                        name="account"
                        required
                        value={values.account}
                        onChange={onChangeHandler}
                    />
                </div>
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;