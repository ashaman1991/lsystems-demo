import React from 'react';
import * as PIXI from 'pixi.js';
import { Paper } from 'material-ui';
import PropTypes from 'prop-types';
import LSystem from '../../lib/lSys';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 5
    };
    this.onClick = this.onClick.bind(this);
    this.animate = this.animate.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
  }

  componentDidMount() {
    this.initCanvas();
  }

  componentWillUpdate(nextProps) {
    if (
      this.props.height !== nextProps.height ||
      this.props.width !== nextProps.width
    ) {
      this.renderer.resize(nextProps.width, nextProps.height);
    }
    if (!this.props.shouldRender && nextProps.shouldRender) {
      this.renderImage();
    }
  }

  animate() {
    // render the stage container
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.animate); // eslint-disable-line
  }

  initCanvas() {
    const { width, height } = this.props;
    this.renderer = PIXI.autoDetectRenderer({
      width,
      height,
      transparent: true
    });
    this.canvas.appendChild(this.renderer.view);

    const stage = new PIXI.Container();
    stage.width = width; // TODO: get from props
    stage.height = height;
    this.stage = stage;
    this.animate();
  }

  renderImage() {
    const options = this.props.options;
    let start = options.start || { x: 0, y: 0 };
    const stage = this.stage;
    stage.removeChildren();
    const system = new LSystem(this.props.type);
    const str = system.applyRuleset(options.iterations);
    const path = system.getPoints(start, str);
    start = path[path.length - 1];
    // eslint-disable-next-line
    (function myLoop(i) {
      setTimeout(() => {
        const line = new PIXI.Graphics();
        line.lineStyle(2, options.color || 0x0000ff, 1);
        line.moveTo(start.x, start.y);
        const { x, y } = path[i];
        line.lineTo(x, y);
        stage.addChild(line);
        start = { x, y };
        if (--i >= 0) myLoop(i);
      }, 30);
    })(path.length - 2);
    this.animate();
    this.props.stopRender();
  }

  onClick() {} // eslint-disable-line

  render() {
    const { height, width } = this.props;
    return (
      <Paper style={{ width, height }} zDepth={2}>
        <div
          className="canvas-container"
          id="canvas"
          ref={canvas => {
            this.canvas = canvas;
          }}
        />
      </Paper>
    );
  }
}

Canvas.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
  options: PropTypes.object,
  shouldRender: PropTypes.bool,
  stopRender: PropTypes.func
};

export default Canvas;
