import { AVIS_OF_DESTINATION } from "../Type"

const initialState = {
    Avis_Of_Destination: [],
}



const AvisReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case AVIS_OF_DESTINATION :
            return { ...state, Avis_Of_Destination: payload };

        default:
            return state
    }
}   





export default AvisReducer