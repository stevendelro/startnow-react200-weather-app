import { combineReducers } from 'redux';
import HistoryListReducer from './reducers/HistoryListReducer';
import CityCardReducer from './reducers/CityCardReducer';

const rootReducer = combineReducers({
  history: HistoryListReducer,
  city: CityCardReducer
});

export default rootReducer;
