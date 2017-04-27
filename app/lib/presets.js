import Turtle from './turtle';

function serpinskiCurve(char) {
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

function serpinskiTriangle(char) {
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

function plant(char) {
  switch (char) {
    case 'X':
      return 'F-[[X]+X]+F[+FX]-X';
    case 'F':
      return 'FF';
    default:
      return char;
  }
}

export default {
  plant: {
    ruleset: plant,
    axiom: 'X',
    getLines(start) {
      const ruleString = this.applyRuleset();
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const lines = [];
      const valueStack = [];
      const angle = 25;
      const length = 25;
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            lines.push(turtle.nextLine(length));
            break;
          case '+':
            turtle.turn(-angle);
            break;
          case '-':
            turtle.turn(angle);
            break;
          case '[':
            valueStack.push(turtle.state);
            break;
          case ']':
            turtle.state = valueStack.pop();
            break;
          default:
            break;
        }
      }
      return lines;
    }
  },
  serpinskiTriangle: {
    ruleset: serpinskiTriangle,
    axiom: 'F-G-G',
    getLines(start) {
      const ruleString = this.applyRuleset();
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const lines = [];
      const angle = 120;
      const length = 25;
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            lines.push(turtle.nextLine(length));
            break;
          case 'G':
            lines.push(turtle.nextLine(length));
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
      return lines;
    }
  },
  dragonCurve: {
    ruleset: dragonCurve,
    axiom: 'FX',
    getLines(start) {
      const ruleString = this.applyRuleset();
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 90;
      const length = 25;
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            path.push(turtle.nextLine(length));
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
    getLines(start) {
      const ruleString = this.applyRuleset();
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 90;
      const length = 25;
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'F':
            path.push(turtle.nextLine(length));
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
  serpinskiCurve: {
    ruleset: serpinskiCurve,
    axiom: 'A',
    getLines(start) {
      const ruleString = this.applyRuleset();
      const turtle = new Turtle(start || { x: 0, y: 0 });
      const path = [];
      const angle = 60;
      const length = 25;
      for (let index = 0; index < ruleString.length; index++) {
        switch (ruleString[index]) {
          case 'A':
            path.push(turtle.nextLine(length));
            break;
          case 'B':
            path.push(turtle.nextLine(length));
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
