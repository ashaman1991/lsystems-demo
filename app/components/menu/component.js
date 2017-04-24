/* eslint-disable react/no-children-prop */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import TypeSelect from '../forms/typeSelect';
import Canvas from '../canvas';
import * as Options from '../forms/optionsForms';
import { fractalTypes } from '../../lib/lSys';

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

const Menu = props => {
  const OptForm = getOptionsForm(props.type);
  return (
    <div>
      <GridLayout className="layout" rowHeight={65} layout={layout}>
        <AppBar key="top-bar" title="Test" showMenuIconButton={false} />
        <div key="menu">
          <Paper zDepth={2}>
            <TypeSelect />
            <OptForm />
          </Paper>
        </div>
        <div className="content" key="content-area">
          <Paper zDepth={2}>
            <Canvas />
          </Paper>
        </div>
      </GridLayout>
    </div>
  );
};

Menu.propTypes = {
  type: PropTypes.string
};

export default Menu;
