import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_EVENEMENT, GET_ERROR_EVENEMENT } from "../Type"










// Get All Evenement  
export const GetAllEvenement = () => async (dispatch) => {
    try {
        const res = await UseGetdata('evenements')
        // console.log('res :', res.data)
        dispatch({ type: ALL_EVENEMENT, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_EVENEMENT, payload:`Error: ${error.response}` })
    }
}