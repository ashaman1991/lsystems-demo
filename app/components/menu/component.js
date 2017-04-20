/* eslint-disable react/no-children-prop */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';

const GridLayout = WidthProvider(ReactGridLayout);

const layout = [
  { i: 'top-bar', x: 0, y: 0, w: 12, h: 1, static: true },
  { i: 'menu', x: 0, y: 1, w: 2, h: 12, static: true },
  { i: 'content-area', x: 2, y: 1, w: 10, h: 12, static: true }
];

const Menu = props => {
  return (
    <div>
      <GridLayout className="layout" rowHeight={65} layout={layout}>
        <AppBar key="top-bar" title="Test" showMenuIconButton={false} />
        <div className="content" key="content-area">
          {props.children}
        </div>
      </GridLayout>
    </div>
  );
};

Menu.propTypes = {
  children: React.PropTypes.object
};

export default Menu;
