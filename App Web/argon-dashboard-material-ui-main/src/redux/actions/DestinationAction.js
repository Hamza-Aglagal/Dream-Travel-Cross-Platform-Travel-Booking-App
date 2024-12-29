import { UseGetdata } from "hooks/crud/UseGetdata"
import { ALL_DESTINATION, GET_ERROR_DESTINATION } from "../types"


// Get All destination 
export const GetAllDestination = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/destination')
        // console.log('res :', res)
        dispatch({ type: ALL_DESTINATION , payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DESTINATION, payload:`Error: ${error.response}` })
    }
}




