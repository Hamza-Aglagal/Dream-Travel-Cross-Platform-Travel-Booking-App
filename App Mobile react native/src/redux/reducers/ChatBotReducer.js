import { ALL_MESSSAGES_CONVERSATION, ALL_MESSSAGES_CONVERSATION_ERR, AVIS_OF_DESTINATION, MESSAGE_RESPONSE } from "../Type"

const initialState = {
    Message_ChatBot: null,
    All_Messages_conv : null,
    Err : []
}



const ChatBotreducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case MESSAGE_RESPONSE:
            return { ...state, Message_ChatBot: payload };

        case ALL_MESSSAGES_CONVERSATION:
            return { ...state, All_Messages_conv: payload };




        case ALL_MESSSAGES_CONVERSATION_ERR:
            return { ...state, Err: payload };

        default:
            return state
    }
}





export default ChatBotreducer