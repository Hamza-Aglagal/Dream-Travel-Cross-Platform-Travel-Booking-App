import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_MESSSAGES_CONVERSATION_CHAT, ALL_MESSSAGES_CONVERSATION_CHAT_ERR, NAME_FRIEND, NAME_FRIEND_ERR } from "../Type"






// get all messages of conversation 
export const GetAllMessagesChat= (Conv_id) => async (dispatch) => {
    try {
        // console.log('test__1',Conv_id)
        const res = await UseGetdata(`messages/${Conv_id}`)
        // console.log('data==::::== :'+ res.data)
        dispatch({ type: ALL_MESSSAGES_CONVERSATION_CHAT, payload: res.data.data  })

    } catch (error) {
        dispatch({ type: ALL_MESSSAGES_CONVERSATION_CHAT_ERR, payload:`Error: ${error.response}` })
    }
}


// get name of  friend 
export const getNameFriend= (Conv_id,User_id) => async (dispatch) => {
    try {
        // console.log('test__1',Conv_id)
        // console.log('test__1',User_id)
        const res = await UseGetdata(`name-friend/${Conv_id}/${User_id}`)
        // console.log('data==::::== :'+ res.data)
        dispatch({ type: NAME_FRIEND, payload: res.data.friend_name  })

    } catch (error) {
        dispatch({ type: NAME_FRIEND_ERR, payload:`Error: ${error.response}` })
    }
}