import {   UseInsertDataAuth } from "../../hooks/crud/useInsertData"
import { LOGIN_ERROR, LOGIN_USER, REGISTER_ERROR, REGISTER_USER } from "../Type"




// Login User 
export const LoginUser = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertDataAuth('login',formData)
        // console.log('t----------t'+response.data)
        dispatch({ type: LOGIN_USER, payload: response.data })
    } catch (error) {
        dispatch({ type: LOGIN_ERROR, payload: error.error })
    }
}



// Register User 
export const RegisterUser = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertDataAuth('register',formData)
        // console.log('t----------t'+response.data)
        dispatch({ type: REGISTER_USER, payload: response.data })
    } catch (error) {
        dispatch({ type: REGISTER_ERROR, payload: error })
    }
}


