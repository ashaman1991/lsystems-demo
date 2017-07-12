import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
// import Canvas from '../canvas';

const GridLayout = WidthProvider(ReactGridLayout);

const layout = [
  { i: 'top-bar', x: 0, y: 0, w: 12, h: 1, static: true },
  { i: 'content-area', x: 0, y: 1, w: 12, h: 11, static: true }
];

const Menu = props => {
  return (
    <GridLayout className="layout" rowHeight={65} layout={layout}>
      <Toolbar key="top-bar">
        <ToolbarGroup>
          <ToolbarTitle text="Demo React app (Redux, PIXI.js)" />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton
            label="L-Systems + Turtle graphics"
            containerElement={<Link to="/fractal" />}
          />
          <ToolbarSeparator />
          <FlatButton
            label="Spirograph"
            containerElement={<Link to="/spirograph" />}
          />
        </ToolbarGroup>
      </Toolbar>
      <div className="content" key="content-area">
        {props.children}
      </div>
    </GridLayout>
  );
};

Menu.propTypes = {
  children: PropTypes.any
};

export default Menu;
