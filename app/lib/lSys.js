import presets from './presets';

const empty = () => {
  return [];
};

export default class LSystem {
  constructor(type = '', iterations = 1, stepLength = 25, customPreset) {
    const preset = presets[type] || customPreset;
    this.axiom = preset.axiom;
    this.stepLength = stepLength;
    this.iterations = iterations;
    this.ruleset = preset.ruleset;
    this.getPoints = preset.getPoints || empty;
    this.getLines = preset.getLines || empty;
  }
  applyRuleset() {
    let result = '';
    let start = this.axiom;
    for (let index = 0; index < this.iterations; index++) {
      result = '';
      for (let i = 0; i < start.length; i++) {
        result += this.ruleset(this.ruleset(start[i]));
      }
      start = result.slice(0);
    }
    return start;
  }
}

export { fractalTypes } from './presets';
