import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  form: formReducer,
  // Add other reducers if needed
});

export default rootReducer;