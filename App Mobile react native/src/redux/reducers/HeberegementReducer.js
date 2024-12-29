import {  ALL_HEBERGEMENT } from "../Type";

const initialState = {
    All_Hebergement: [],
}



const HebergementReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_HEBERGEMENT:
            return { ...state, All_Hebergement: payload };

        default:
            return state
    }
}   





export default HebergementReducer