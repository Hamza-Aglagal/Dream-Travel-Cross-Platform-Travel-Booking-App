import { useGetdataChatBot } from "../../hooks/crud/UseGetdata"
import {  UseInsertDataChatBot } from "../../hooks/crud/useInsertData"
import { ALL_MESSSAGES_CONVERSATION, ALL_MESSSAGES_CONVERSATION_ERR, MESSAGE_RESPONSE, MESSAGE_RESPONSE_ERR } from "../Type"






// Send message to chatBot and get response
export const SendMessage= (formdata) => async (dispatch) => {
    try {
        const res = await UseInsertDataChatBot(`send-message`, formdata)
        // console.log('data==::::== :', res.data)
        dispatch({ type: MESSAGE_RESPONSE, payload: res.data   })
    } catch (error) {
        dispatch({ type: MESSAGE_RESPONSE_ERR, payload:`Error: ${error.response}` })
    }
}



// Get All messages of conversation of user connect
export const GetAllMessagesChatBot= (Id_User) => async (dispatch) => {
    try {
        console.log('id_user : ', Id_User)
        const res = await useGetdataChatBot(`all-messages/${Id_User}`)
        // console.log('data==::::== :'+ res.data)
        dispatch({ type: ALL_MESSSAGES_CONVERSATION, payload: res.data.data  })
    } catch (error) {
        dispatch({ type: ALL_MESSSAGES_CONVERSATION_ERR, payload:`Error: ${error.response}` })
    }
}