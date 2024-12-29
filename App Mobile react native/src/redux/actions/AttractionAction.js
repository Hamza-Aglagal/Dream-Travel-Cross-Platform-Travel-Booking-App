import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_ATTRACTION, GET_ERROR_ATTRACTION } from "../Type"






// Get All Attraction 
export const GetAllAttraction = () => async (dispatch) => {
    try {
        const res = await UseGetdata('attractions')
        // console.log('data==::::== :', res.data)
        dispatch({ type: ALL_ATTRACTION, payload: res.data.data   })
    } catch (error) {
        dispatch({ type: GET_ERROR_ATTRACTION, payload:`Error: ${error.response}` })
    }
}