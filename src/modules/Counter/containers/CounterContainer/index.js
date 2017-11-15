import { connect } from 'react-redux';

import Counter from '../../components/Counter';
import { incrementCounter, decrementCounter } from '../../data/actions';

const mapStateToProps = state => ({
  count: state.counter.count,
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
