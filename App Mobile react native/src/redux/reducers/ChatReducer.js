import { ALL_MESSSAGES_CONVERSATION_CHAT, ALL_MESSSAGES_CONVERSATION_CHAT_ERR, NAME_FRIEND } from "../Type";

const initialState = {
    All_Messages_conv: [],
    Name_Friend: null,
    Err: []
}



const ChatReducer = (state = initialState, { type, payload }) => {
    switch (type) {



        case ALL_MESSSAGES_CONVERSATION_CHAT:
            return { ...state, All_Messages_conv: payload };


        case NAME_FRIEND:
            return { ...state, Name_Friend: payload };



        case ALL_MESSSAGES_CONVERSATION_CHAT_ERR:
            return { ...state, Err: payload };

        default:
            return state
    }
}





export default ChatReducer