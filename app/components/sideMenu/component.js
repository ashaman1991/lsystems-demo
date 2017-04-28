import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { RaisedButton, Paper, Toggle, Slider } from 'material-ui';
import TypeSelect from '../forms/typeSelect';
import * as Options from '../forms/optionsForms';
import { fractalTypes } from '../../lib/lSys';
import ColorPicker from '../forms/colorPicker';

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
        <TypeSelect />
        <Toggle label="Animate" />
        <Slider
          step={5}
          value={this.props.stepLength}
          min={5}
          max={50}
          onChange={this.props.onStepChange}
        />
        <ColorPicker
          color={this.props.lineColor}
          onChange={this.props.onLineColorChange}
        />
        <ColorPicker
          color={this.props.backgroundColor}
          onChange={this.props.onBackgroundColorChange}
        />
        <OptionsForm />
        <RaisedButton onClick={this.props.onRenderButtonClick}>
          Draw
        </RaisedButton>
      </Paper>
    );
  }
}

SideMenu.propTypes = {
  type: PropTypes.string,
  onRenderButtonClick: PropTypes.func,
  lineColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onLineColorChange: PropTypes.func,
  onBackgroundColorChange: PropTypes.func,
  stepLength: PropTypes.number,
  onStepChange: PropTypes.func
};

export default SideMenu;
