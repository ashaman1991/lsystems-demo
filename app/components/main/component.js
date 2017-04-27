import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import Canvas from '../canvas';
import SideMenu from '../sideMenu';

const GridLayout = WidthProvider(ReactGridLayout);

const layout = [
  { i: 'top-bar', x: 0, y: 0, w: 12, h: 1, static: true },
  { i: 'menu', x: 0, y: 1, w: 3, h: 12, static: true },
  { i: 'content-area', x: 3, y: 1, w: 9, h: 12, static: true }
];

class Main extends React.PureComponent {
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
    return (
      <div>
        <GridLayout className="layout" rowHeight={65} layout={layout}>
          <AppBar key="top-bar" title=" Demo React app (Redux, PIXI.js)" showMenuIconButton={false} />
          <div key="menu">
            <SideMenu />
          </div>
          <div className="content" key="content-area">
            <Canvas />
          </div>
        </GridLayout>
      </div>
    );
  }
}

Main.propTypes = {
  onResize: PropTypes.func
};

export default Main;
