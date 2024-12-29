import { ID_ADRESSE, GET_ERROR_ADRESSE } from "../types";


const initialState = {
    Id_Adresse : [],


    error : ''
};

const AdresseReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ID_ADRESSE: {
            return { ...state, Id_Adresse: payload };
        }
    


        case GET_ERROR_ADRESSE: {
            return { ...state, error: payload };
        }


        default:
            return state;
    }
};

export default AdresseReducer;