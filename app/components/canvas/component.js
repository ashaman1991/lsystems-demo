import React from 'react';
import * as PIXI from 'pixi.js';
import { RaisedButton, TextField } from 'material-ui';
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
  }

  componentDidMount() {
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
  componentWillReceiveProps(nextProps) {
    this.setState({ ticks: nextProps.options.iterations });
  }

  onClick() {
    const options = this.props.options;
    let start = options.start || { x: 0, y: 0 };
    const stage = this.stage;
    stage.removeChildren();
    const system = new LSystem(this.props.type);
    const str = system.applyRuleset(this.state.ticks);
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
      }, 60);
    })(path.length - 2);
    this.animate();
  }
  animate() {
    // render the stage container
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.animate); // eslint-disable-line
  }

  render() {
    return (
      <div>
        <div
          className="canvas-container"
          id="canvas"
          ref={canvas => {
            this.canvas = canvas;
          }}
        />
        <br />
        <TextField
          name="iterations"
          type="number"
          value={this.state.ticks}
          onChange={e => {
            this.setState({ ticks: e.target.value });
          }}
        />
        <RaisedButton onClick={this.onClick}> Draw!</RaisedButton>
      </div>
    );
  }
}

Canvas.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
  options: PropTypes.object
};

export default Canvas;
