import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { AVIS_OF_DESTINATION, GET_ERROR_AVIS } from "../Type"




// Get  Avis of  destination
export const GetAvisOfDestination = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`avis/${id}`)
        // console.log('data test ::', res.data.data )
        dispatch({ type: AVIS_OF_DESTINATION, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_AVIS, payload:`Error: ${error.response}` })
    }
}





