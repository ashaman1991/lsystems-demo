import React from 'react';
import * as PIXI from 'pixi.js';
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
    this.renderer = PIXI.autoDetectRenderer(1366, 768);
    this.canvas.appendChild(this.renderer.view);

    this.stage = new PIXI.Container();
    this.stage.width = 1300; // TODO: get from props
    this.stage.height = 768;

    this.animate();
  }

  onClick() {
    let start = { x: 0, y: 0 };
    const stage = this.stage;
    stage.removeChildren();
    const system = new LSystem(LSystem.types.KOCH_CURVE);
    const str = system.applyRuleset(this.state.ticks);
    const path = system.getPoints(start, str);
    start = path[path.length - 1];
    // eslint-disable-next-line
    (function myLoop(i) {
      setTimeout(() => {
        const line = new PIXI.Graphics();
        line.lineStyle(2, 0xffffff, 1);
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
        <input
          type="number"
          value={this.state.ticks}
          onChange={e => {
            this.setState({ ticks: e.target.value });
          }}
        />
        <button onClick={this.onClick}> Draw!</button>
      </div>
    );
  }
}

export default Canvas;
