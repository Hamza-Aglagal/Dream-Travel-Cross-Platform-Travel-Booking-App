import { combineReducers } from "redux"
import DestinationReducer from "./DestinationReducer"
import AdresseReducer from "./AdressAction"




const RootReducers = combineReducers({
    RedDestination : DestinationReducer,
    RedAdresse : AdresseReducer,


})



export default RootReducers