import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import { CompactPicker } from 'react-color';

const wrapperStyle = {
  display: 'flex'
};

const labelStyle = {
  width: '30%',
  lineHeight: 2.6
};

const colorButtonStyle = {
  margin: '10px',
  width: '40px',
  height: '20px',
  borderRadius: '5px',
  borderWidth: '2px',
  borderColor: '#555555',
  borderStyle: 'solid',
  display: 'inline-block'
};

export default class Picker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  componentDidMount() {
    this.anchorEl = ReactDOM.findDOMNode(this.button); // eslint-disable-line
  }
  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div style={wrapperStyle}>
        <span style={labelStyle}>{this.props.label}</span>
        <div
          ref={button => {
            this.button = button;
          }}
          style={Object.assign({}, colorButtonStyle, {
            backgroundColor: this.props.color
          })}
          onClick={this.toggleOpen}
        >
          <Popover
            open={this.state.open}
            anchorEl={this.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.toggleOpen}
          >
            <CompactPicker
              color={this.props.color}
              onChangeComplete={this.props.onChange}
            />
          </Popover>
        </div>
      </div>
    );
  }
}

Picker.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};
