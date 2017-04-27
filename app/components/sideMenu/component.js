import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { RaisedButton, Popover, Paper } from 'material-ui';
import { CompactPicker } from 'react-color';
import TypeSelect from '../forms/typeSelect';
import * as Options from '../forms/optionsForms';
import { fractalTypes } from '../../lib/lSys';

const buttonStyle = { margin: '10px' };
const colorButtonStyle = {
  margin: '10px',
  width: '40px',
  height: '20px',
  borderRadius: '5px'
};

function getOptionsForm(type) {
  switch (type) {
    case fractalTypes.SERPINSKY_TRIANGLE:
      return Options.serpinsky;
    default:
      return Options.any;
  }
}

class SideMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lineColorPopover: false,
      bgColorPopover: false
    };
    this.linePopoverToggle = this.linePopoverToggle.bind(this);
  }
  componentDidMount() {
    this.lineColorPopoverAnchor = ReactDOM.findDOMNode(this.lineColorButton); // eslint-disable-line
  }
  linePopoverToggle() {
    this.setState({ lineColorPopover: !this.state.lineColorPopover });
  }
  render() {
    const OptionsForm = getOptionsForm(this.props.type);
    return (
      <Paper zDepth={2}>
        <TypeSelect />
        <div
          ref={lineColorButton => {
            this.lineColorButton = lineColorButton;
          }}
          style={Object.assign({}, colorButtonStyle, {
            backgroundColor: this.props.color
          })}
          onClick={this.linePopoverToggle}
        />
        <Popover
          open={this.state.lineColorPopover}
          anchorEl={this.lineColorPopoverAnchor}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.linePopoverToggle}
        >
          <CompactPicker
            color={this.props.color}
            onChangeComplete={this.props.onColorChange}
          />
        </Popover>
        <OptionsForm />
        <RaisedButton
          style={buttonStyle}
          onClick={this.props.onRenderButtonClick}
        >
          Draw
        </RaisedButton>
      </Paper>
    );
  }
}

SideMenu.propTypes = {
  type: PropTypes.string,
  onRenderButtonClick: PropTypes.func,
  color: PropTypes.string,
  onColorChange: PropTypes.func
};

export default SideMenu;
