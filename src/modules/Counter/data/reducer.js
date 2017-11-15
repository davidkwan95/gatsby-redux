import types from './types';

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counter;
