import { connect } from 'react-redux';
import SelectComponent from './component';
import * as actions from '../../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, _, value) => {
      dispatch(actions.changeType(value));
    }
  };
};

const mapStateToProps = state => {
  return {
    value: state.fractal.type
  };
};

const Select = connect(mapStateToProps, mapDispatchToProps)(SelectComponent);

export default Select;
