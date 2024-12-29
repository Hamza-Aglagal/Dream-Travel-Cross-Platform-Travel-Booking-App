import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_EVENEMENT, ALL_HEBERGEMENT, GET_ERROR_EVENEMENT, GET_ERROR_HEBERGEMENT } from "../Type"










// Get All Hebergement  
export const GetAllHebergement = () => async (dispatch) => {
    try {
        const res = await UseGetdata('hebergements')
        // console.log('res :', res.data)
        dispatch({ type: ALL_HEBERGEMENT, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_HEBERGEMENT, payload:`Error: ${error.response}` })
    }
}