function toRadians(angle) {
  return angle * (Math.PI / 180);
}

export default class Turtle {
  constructor(startPoint) {
    this.position = startPoint;
    this.angle = 0;
  }
  nextPoint(length) {
    const { x, y } = this.position;
    const newPoint = {
      x: x + Math.cos(toRadians(this.angle)) * length,
      y: y + Math.sin(toRadians(this.angle)) * length
    };
    this.position = newPoint;
    return newPoint;
  }

  nextLine(length) {
    const { x, y } = this.position;
    const newPoint = {
      x: x + Math.cos(toRadians(this.angle)) * length,
      y: y + Math.sin(toRadians(this.angle)) * length
    };
    this.position = newPoint;
    return { start: { x, y }, end: newPoint };
  }

  turn(angle) {
    this.angle += angle;
    this.angle = this.angle % 360;
    if (this.angle < 0) this.angle += 360;
  }

  get state() {
    return { position: this.position, angle: this.angle };
  }

  set state(state) {
    this.position = state.position;
    this.angle = state.angle;
  }
}
