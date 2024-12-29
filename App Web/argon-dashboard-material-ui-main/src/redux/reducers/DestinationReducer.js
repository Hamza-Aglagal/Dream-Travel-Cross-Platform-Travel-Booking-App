import { ALL_DESTINATION, GET_ERROR_DESTINATION } from "../types";


const initialState = {
    All_destination : [],


    error : ''
};

const DestinationReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_DESTINATION: {
            return { ...state, All_destination: payload };
        }
    


        case GET_ERROR_DESTINATION: {
            return { ...state, error: payload };
        }


        default:
            return state;
    }
};

export default DestinationReducer;