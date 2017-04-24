import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';
import PropTypes from 'prop-types';
import * as actions from '../../../actions';

// import { SelectField, MenuItem } from 'material-ui';
// import { map } from 'lodash';

class OptionsUpdate extends React.Component {
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
      <div style={{ padding: '10px' }}>
        <TextField
          floatingLabelText="Default"
          hintText="Default"
          name="iterations"
          type="number"
          value={iterations}
          onChange={this.onChange}
        />
        <RaisedButton> Draw!</RaisedButton>
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
      dispatch(actions.changeOptions(options));
    }
  };
};

const mapStateToProps = state => {
  return {
    options: state.fractal.options || {}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsUpdate);
