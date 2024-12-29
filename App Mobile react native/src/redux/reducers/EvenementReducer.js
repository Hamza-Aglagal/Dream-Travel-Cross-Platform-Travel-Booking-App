import { ALL_EVENEMENT } from "../Type";

const initialState = {
    All_evenement: [],
}



const EvenementReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ALL_EVENEMENT:
            return { ...state, All_evenement: payload };

        default:
            return state
    }
}   





export default EvenementReducer