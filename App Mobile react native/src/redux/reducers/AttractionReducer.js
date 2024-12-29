import { ALL_ATTRACTION } from "../Type"

const initialState = {
    DataAattraction: [],
}



const AttractionReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_ATTRACTION :
            return { ...state, DataAattraction: payload };

        default:
            return state
    }
}   





export default AttractionReducer