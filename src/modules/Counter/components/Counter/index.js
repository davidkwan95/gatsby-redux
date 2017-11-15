import React from 'react';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const Counter = props => (
  <div style={{ textAlign: 'center' }}>
    <div>
      <RaisedButton
        label="+"
        primary
        onClick={props.onClickIncrement}
      />
    </div>
    <div>{ props.count }</div>
    <div>
      <RaisedButton
        label="-"
        primary
        onClick={props.onClickDecrement}
      />
    </div>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
};

export default Counter;
