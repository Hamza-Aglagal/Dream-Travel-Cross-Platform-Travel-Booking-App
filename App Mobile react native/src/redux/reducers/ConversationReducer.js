import { ALL_CONVERSATION_OF_USER, GET_ERROR_CONVERSATION } from "../Type"

const initialState = {
    Conver_Of_User: [],
    Erro_msg: [],
}



const ConversationReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_CONVERSATION_OF_USER:
            return { ...state, Conver_Of_User: payload };



        case GET_ERROR_CONVERSATION:
            return { ...state, Erro_msg: payload };

        default:
            return state
        }
        
    }




export default ConversationReducer