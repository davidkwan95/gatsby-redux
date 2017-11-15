import { combineReducers } from 'redux';

import counter from './modules/Counter/data/reducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
