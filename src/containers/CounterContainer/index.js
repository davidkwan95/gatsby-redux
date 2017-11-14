import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { incrementCounter, decrementCounter } from '../../actions';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onClickIncrement: () => dispatch(incrementCounter()),
  onClickDecrement: () => dispatch(decrementCounter()),
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
