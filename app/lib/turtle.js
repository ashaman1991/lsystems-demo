function toRadians(angle) {
  return angle * (Math.PI / 180);
}

export default class Turtle {
  constructor(startPoint) {
    this.start = startPoint;
    this.angle = 0;
  }
  nextPoint(length) {
    const { x, y } = this.start;
    const newPoint = {
      x: x + (Math.cos(toRadians(this.angle)) * length),
      y: y + (Math.sin(toRadians(this.angle)) * length)
    };
    this.start = newPoint;
    return newPoint;
  }

  turn(angle) {
    this.angle += angle;
    this.angle = this.angle % 360;
    if (this.angle < 0) this.angle += 360;
  }
}
