/* eslint-disable react/no-children-prop */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import TypeSelect from '../forms/typeSelect';

const GridLayout = WidthProvider(ReactGridLayout);

const layout = [
  { i: 'top-bar', x: 0, y: 0, w: 12, h: 1, static: true },
  { i: 'menu', x: 0, y: 1, w: 3, h: 12, static: true },
  { i: 'content-area', x: 3, y: 1, w: 9, h: 12, static: true }
];

const Menu = props => {
  return (
    <div>
      <GridLayout className="layout" rowHeight={65} layout={layout}>
        <AppBar key="top-bar" title="Test" showMenuIconButton={false} />
        <div key="menu">
          <TypeSelect />
        </div>
        <div className="content" key="content-area">
          {props.children}
        </div>
      </GridLayout>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.object
};

export default Menu;
