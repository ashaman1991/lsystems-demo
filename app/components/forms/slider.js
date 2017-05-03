import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'material-ui';

const wrapperStyle = { display: 'flex', lineHeight: 4 };
const labelStyle = { paddingRight: '10px', width: '30%', display: 'flex' };
const sliderStyle = { display: 'flex', width: '100%' };

const LabelledSlider = props => {
  return (
    <div style={wrapperStyle}>
      <div style={labelStyle}>
        Step length
      </div>
      <Slider
        style={sliderStyle}
        step={5}
        value={props.stepLength}
        min={5}
        max={50}
        onChange={props.onStepChange}
      />
    </div>
  );
};

LabelledSlider.propTypes = {
  onStepChange: PropTypes.func,
  stepLength: PropTypes.number
};

export default LabelledSlider;
