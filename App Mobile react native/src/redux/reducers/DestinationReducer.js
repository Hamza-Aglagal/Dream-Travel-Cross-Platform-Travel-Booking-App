import { ALL_DESTINATION, DESTINATION_BY_ID, POPULAR_DESTINATION } from "../Type"

const initialState = {
    All_detinations: [],
    Popular_detinations: [],
    Destination_ById: [],
}



const DestinationReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_DESTINATION:
            return { ...state, All_detinations: payload };

        case POPULAR_DESTINATION:
            return { ...state, Popular_detinations: payload };

        case DESTINATION_BY_ID:
            return { ...state, Destination_ById: payload };

        default:
            return state
    }
}





export default DestinationReducer