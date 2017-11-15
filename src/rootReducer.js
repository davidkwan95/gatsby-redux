import { combineReducers } from 'redux';

import counter from './modules/Counter/reducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
