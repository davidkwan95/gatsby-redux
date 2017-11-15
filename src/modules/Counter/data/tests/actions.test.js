import * as actions from '../actions';
import types from '../types';

describe('counter actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = {
      type: types.INCREMENT_COUNTER,
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it('should create an action to decrement counter', () => {
    const expectedAction = {
      type: types.DECREMENT_COUNTER,
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });
});
