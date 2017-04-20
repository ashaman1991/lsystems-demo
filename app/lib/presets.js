import Turtle from './turtle';

function serpinskyCurve(char) {
  switch (char) {
    case 'A':
      return '+B-A-B+';
    case 'B':
      return '-A+B+A-';
    default:
      return char;
  }
}

function cantorSet(char) {
  switch (char) {
    case 'A':
      return 'ABA';
    case 'B':
      return 'BBB';
    default:
      return char;
  }
}

function kochCurve(char) {
  switch (char) {
    case 'F':
      return 'F+F-F-F+F';
    default:
      return char;
  }
}

function serpinskyTriangle(char) {
  switch (char) {
    case 'F':
      return 'F-G+F+G-F';
    case 'G':
      return 'GG';
    default:
      return char;
  }
}

function dragonCurve(char) {
  switch (char) {
    case 'X':
      return 'X+YF+';
    case 'Y':
      return '-FX-Y';
    default:
      return char;
  }
}

export default {
  serpinskyTriangle: {
    ruleset: serpinskyTriangle,
    axiom: 'F-G-G',
    getPoints: (start, ruleString) => {
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 120;
      const length = 25;
      let point;
      path.push(start);
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case 'G':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case '+':
            turtle.turn(-angle);
            break;
          case '-':
            turtle.turn(angle);
            break;
          default:
            break;
        }
      }
      return path;
    }
  },
  dragonCurve: {
    ruleset: dragonCurve,
    axiom: 'FX',
    getPoints: (start, ruleString) => {
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 90;
      const length = 25;
      let point;
      path.push(start);
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case '+':
            turtle.turn(angle);
            break;
          case '-':
            turtle.turn(-angle);
            break;
          default:
            break;
        }
      }
      return path;
    }
  },
  kochCurve: {
    ruleset: kochCurve,
    axiom: 'F',
    getPoints: (start, ruleString) => {
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 90;
      const length = 25;
      let point;
      path.push(start);
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case '+':
            turtle.turn(angle);
            break;
          case '-':
            turtle.turn(-angle);
            break;
          default:
            break;
        }
      }
      return path;
    }
  },
  cantorSet: {
    ruleset: cantorSet,
    axiom: 'A',
    getPoints: () => {}
  },
  serpinskyCurve: {
    ruleset: serpinskyCurve,
    axiom: 'A',
    getPoints: (start, ruleString) => {
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 60;
      const length = 25;
      let point;
      path.push(start);
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'A':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case 'B':
            point = turtle.nextPoint(length);
            path.push(point);
            break;
          case '+':
            turtle.turn(angle);
            break;
          case '-':
            turtle.turn(-angle);
            break;
          default:
            break;
        }
      }
      return path;
    }
  }
};
