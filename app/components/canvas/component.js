import React from 'react';
import * as PIXI from 'pixi.js';
import { Paper } from 'material-ui';
import PropTypes from 'prop-types';
import LSystem from '../../lib/lSys';

class Canvas extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 5
    };
    this.onClick = this.onClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
    this.clear = this.clear.bind(this);
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
    // false --> true
    if (!this.props.shouldRender && nextProps.shouldRender) {
      this.renderImage();
    }
    // true --> false
    if (this.props.shouldRender && !nextProps.shouldRender) {
      cancelAnimationFrame(this.frame); // eslint-disable-line
    }
    if (this.props.type !== nextProps.type) {
      this.props.stopRender();
      this.clear();
    }
  }

  onClick() {
    this.props.stopRender();
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
    stage.width = width;
    stage.height = height;
    this.stage = stage;
  }

  clear() {
    this.stage.removeChildren();
    this.renderer.render(this.stage);
  }

  renderImage() {
    this.clear();
    const options = this.props.options;
    let start = options.start || { x: 0, y: 0 };
    const stage = this.stage;
    const system = new LSystem(this.props.type);
    const str = system.applyRuleset(options.iterations);
    const path = system.getPoints(start, str);
    start = path[path.length - 1];
    let i = path.length - 2;
    const lineColor = options.lineColor.replace('#', '0x');
    const loop = () => {
      if (--i >= 0) {
        const line = new PIXI.Graphics();
        line.lineStyle(2, lineColor);
        line.moveTo(start.x, start.y);
        const { x, y } = path[i];
        line.lineTo(x, y);
        stage.addChild(line);
        start = { x, y };
        this.renderer.render(this.stage);
        this.frame = requestAnimationFrame(loop); // eslint-disable-line
      } else {
        this.props.stopRender();
      }
    };
    loop();
  }

  render() {
    const { height, width } = this.props;
    return (
      <div>
        <Paper style={{ width, height }} zDepth={2}>
          <div
            className="canvas-container"
            id="canvas"
            ref={canvas => {
              this.canvas = canvas;
            }}
          />
        </Paper>
      </div>
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
