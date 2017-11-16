import types from '../types';
import counterReducer from '../reducer';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      count: 0,
    };
    expect(counterReducer(undefined, {})).toEqual(expectedState);
  });

  it('should increment the counter', () => {
    const initialState = { count: 15 };
    const action = { type: types.INCREMENT_COUNTER };
    const expectedState = { count: 16 };

    expect(counterReducer(initialState, action)).toEqual(expectedState);
  });

  it('should decrement the counter', () => {
    const initialState = { count: 0 };
    const action = { type: types.DECREMENT_COUNTER };
    const expectedState = { count: -1 };

    expect(counterReducer(initialState, action)).toEqual(expectedState);
  });

  it('should still able to decrement the counter even if negative', () => {
    const initialState = { count: -12 };
    const action = { type: types.DECREMENT_COUNTER };
    const expectedState = { count: -13 };

    expect(counterReducer(initialState, action)).toEqual(expectedState);
  });
});
