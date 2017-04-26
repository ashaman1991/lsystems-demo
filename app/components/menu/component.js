/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { CompactPicker } from 'react-color';
import { RaisedButton, Popover } from 'material-ui';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import TypeSelect from '../forms/typeSelect';
import Canvas from '../canvas';
import * as Options from '../forms/optionsForms';
import { fractalTypes } from '../../lib/lSys';

const buttonStyle = { margin: '10px' };
const colorButtonStyle = {
  margin: '10px',
  width: '40px',
  height: '20px',
  borderRadius: '5px'
};
const GridLayout = WidthProvider(ReactGridLayout);

const layout = [
  { i: 'top-bar', x: 0, y: 0, w: 12, h: 1, static: true },
  { i: 'menu', x: 0, y: 1, w: 3, h: 12, static: true },
  { i: 'content-area', x: 3, y: 1, w: 9, h: 12, static: true }
];

function getOptionsForm(type) {
  switch (type) {
    case fractalTypes.SERPINSKY_TRIANGLE:
      return Options.serpinsky;
    default:
      return Options.any;
  }
}
class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lineColorPopover: false,
      bgColorPopover: false
    };
    this.linePopoverToggle = this.linePopoverToggle.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
    this.lineColorPopoverAnchor = ReactDOM.findDOMNode(this.lineColorButton); // eslint-disable-line
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onResize);
  }

  linePopoverToggle() {
    this.setState({ lineColorPopover: !this.state.lineColorPopover });
  }

  render() {
    const OptionsForm = getOptionsForm(this.props.type);
    return (
      <div>
        <GridLayout className="layout" rowHeight={65} layout={layout}>
          <AppBar key="top-bar" title="Test" showMenuIconButton={false} />
          <div key="menu">
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
              <RaisedButton style={buttonStyle} onClick={this.props.onClick}>
                Draw
              </RaisedButton>
            </Paper>
          </div>
          <div className="content" key="content-area">
            <Canvas />
          </div>
        </GridLayout>
      </div>
    );
  }
}

Menu.propTypes = {
  type: PropTypes.string,
  onResize: PropTypes.func,
  onClick: PropTypes.func,
  color: PropTypes.string,
  onColorChange: PropTypes.func
};

export default Menu;
