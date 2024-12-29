 import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_DESTINATION, DESTINATION_BY_ID, GET_ERROR_DESTINATION, POPULAR_DESTINATION } from "../Type"




// Get All Destination 
export const GetAllDestination = () => async (dispatch) => {
    try {
        const res = await UseGetdata('destinations')
        // console.log('res :', res.data)
        dispatch({ type: ALL_DESTINATION, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DESTINATION, payload:`Error: ${error.response}` })
    }
}


// Get Popular Destination 
export const GetPopularDestinations = () => async (dispatch) => {
    try {
        const res = await UseGetdata('popular-destinations')
        // console.log('res :', res.data)
        dispatch({ type: POPULAR_DESTINATION, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DESTINATION, payload:`Error: ${error.response}` })
    }
}



// Get  Destination by Id
export const GetDestinationById = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`destination/${id}`)
        // console.log('data test ::', res.data.data )
        dispatch({ type: DESTINATION_BY_ID, payload: res.data.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DESTINATION, payload:`Error: ${error.response}` })
    }
}










