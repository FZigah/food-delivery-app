import { createStore, combineReducers } from 'redux';
import cartreducer from './cartreducer';

const rootReducer = combineReducers({
  cart: cartreducer, // You can add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;