import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';
import actions from '../../../actions';

class OptionsUpdate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    const state = this.state;
    state.iterations = value;
    this.setState(state);
    this.props.onChange(state);
  }

  render() {
    const { iterations } = this.props.options;
    return (
      <div>
        <TextField
          floatingLabelText="Iterations"
          hintText="Iterations"
          name="iterations"
          type="number"
          value={iterations}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

OptionsUpdate.propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: options => {
      dispatch(actions.fractal.changeOptions(options));
    }
  };
};

const mapStateToProps = state => {
  return {
    options: state.fractal.options || {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsUpdate);
