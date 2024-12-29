import { LOGIN_ERROR, LOGIN_USER, REGISTER_ERROR, REGISTER_USER } from "../Type"

const initialState = {
    Login: [],
    Login_error: [],

    Register : [],
    Register_error : [],
}



const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN_USER:
            return { ...state, Login: payload }

        case REGISTER_USER:
            return { ...state, Register: payload }



        case REGISTER_ERROR:
            return { ...state, Register_error: payload }

        case LOGIN_ERROR:
            return { ...state, Login_error: payload }

        default:
            return state
    }
}





export default AuthReducer