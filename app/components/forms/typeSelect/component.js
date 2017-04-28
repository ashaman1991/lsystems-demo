import React from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import { map } from 'lodash';
import { fractalTypes } from '../../../lib/lSys';

function getOptions() {
  return map(fractalTypes, name => {
    return <MenuItem key={name} value={name} primaryText={name} />;
  });
}

const Select = props => {
  return (
    <div>
      <SelectField
        hintText="Fractal Type"
        value={props.value}
        onChange={props.onChange}
      >
        {getOptions()}
      </SelectField>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default Select;
