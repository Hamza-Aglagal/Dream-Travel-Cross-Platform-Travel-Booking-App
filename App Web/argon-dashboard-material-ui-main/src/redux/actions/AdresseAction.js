import { UseGetdata } from "hooks/crud/UseGetdata"
import { ID_ADRESSE, GET_ERROR_ADRESSE } from "../types"




// create adresse  
export const CreateAdresse = (formdata) => async (dispatch) => {
    try {
        const res = await UseGetdata('/adresse/create', formdata)
        console.log('res :', res)
        dispatch({ type: ID_ADRESSE , payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_ADRESSE, payload:`Error: ${error.response}` })
    }
}




