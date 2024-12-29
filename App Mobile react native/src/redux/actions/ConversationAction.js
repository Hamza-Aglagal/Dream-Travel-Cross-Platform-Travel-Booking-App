import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_CONVERSATION_OF_USER, GET_ERROR_CONVERSATION } from "../Type"






// Get All Conversation of user 
export const GetAllConversationUser= (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`conversation/${id}`)
        // console.log('data==::::== :', res.data)
        dispatch({ type: ALL_CONVERSATION_OF_USER, payload: res.data.data   })
    } catch (error) {
        dispatch({ type: GET_ERROR_CONVERSATION, payload:`Error: ${error.response}` })
    }
}