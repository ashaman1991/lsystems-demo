import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { RaisedButton, Paper, Toggle } from 'material-ui';
import Slider from '../forms/slider';
import TypeSelect from '../forms/typeSelect';
import * as Options from '../forms/optionsForms';
import { fractalTypes } from '../../lib/lSys';
import ColorPicker from '../forms/colorPicker';

const buttonStyle = {
  style: {
    margin: '10px'
  }
};

function getOptionsForm(type) {
  switch (type) {
    case fractalTypes.SERPINSKY_TRIANGLE:
      return Options.serpinski;
    default:
      return Options.any;
  }
}

class SideMenu extends React.PureComponent {
  componentDidMount() {
    this.lineColorPopoverAnchor = ReactDOM.findDOMNode(this.lineColorButton); // eslint-disable-line
    this.bgColorPopoverAnchor = ReactDOM.findDOMNode(this.bgColorButton); // eslint-disable-line
  }

  render() {
    const OptionsForm = getOptionsForm(this.props.type);
    return (
      <Paper zDepth={2} style={{ padding: '10px' }}>
        <TypeSelect
          value={this.props.type}
          onChange={this.props.onTypeChange}
        />
        <Toggle
          label="Animate"
          toggled={this.props.animate}
          onToggle={this.props.onAnimateChange}
        />
        <Slider
          onStepChange={this.props.onStepChange}
          stepLength={this.props.stepLength}
        />
        <ColorPicker
          color={this.props.lineColor}
          onChange={this.props.onLineColorChange}
          label="Line Color"
        />
        <ColorPicker
          color={this.props.backgroundColor}
          onChange={this.props.onBackgroundColorChange}
          label="Background Color"
        />
        <OptionsForm />
        <RaisedButton
          {...buttonStyle}
          primary
          onClick={this.props.onRenderButtonClick}
          label="Draw"
        />
        <RaisedButton
          label="Save Image"
          {...buttonStyle}
          onClick={this.props.onSaveButtonClick}
        />
        <RaisedButton
          secondary
          disabled={!this.props.animate}
          label="Cancel"
          {...buttonStyle}
          onClick={this.props.onCancelButtonClick}
        />
      </Paper>
    );
  }
}

SideMenu.propTypes = {
  animate: PropTypes.bool,
  type: PropTypes.string,
  lineColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  stepLength: PropTypes.number,
  onRenderButtonClick: PropTypes.func,
  onLineColorChange: PropTypes.func,
  onBackgroundColorChange: PropTypes.func,
  onStepChange: PropTypes.func,
  onAnimateChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  onCancelButtonClick: PropTypes.func,
  onTypeChange: PropTypes.func
};

export default SideMenu;
