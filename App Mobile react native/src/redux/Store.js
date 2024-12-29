import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './reducers/AuthReducder';
import DestinationReducer from './reducers/DestinationReducer';
import { thunk } from 'redux-thunk';
import AttractionReducer from './reducers/AttractionReducer';
import EvenementReducer from './reducers/EvenementReducer';
import HebergementReducer from './reducers/HeberegementReducer';
import AvisReducer from './reducers/AvisReducer';
import ConversationReducer from './reducers/ConversationReducer';
import ChatBotreducer from './reducers/ChatBotReducer';
import ChatReducer from './reducers/ChatReducer';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistReducer, persistStore } from 'redux-persist';



const rootReducer = combineReducers({
  Auth: AuthReducer,
  RedDestination: DestinationReducer,
  RedAttraction: AttractionReducer,
  RedEvenement: EvenementReducer,
  RedHeberegement: HebergementReducer,
  RedAvis: AvisReducer,
  RedConversation: ConversationReducer,
  RedChatBot: ChatBotreducer,
  RedChat: ChatReducer,
});




const store = createStore(rootReducer, applyMiddleware(thunk));


export default store