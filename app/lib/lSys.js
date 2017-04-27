import presets from './presets';

const empty = () => {
  return [];
};

export default class LSystem {
  constructor(type = '', iterations = 1, customPreset) {
    const preset = presets[type] || customPreset;
    this.axiom = preset.axiom;
    this.ruleset = preset.ruleset;
    this.iterations = iterations;
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

export const fractalTypes = {
  SERPINSKY_TRIANGLE: 'serpinskiTriangle',
  SERPINSKY_CURVE: 'serpinskiCurve',
  DRAGON_CURVE: 'dragonCurve',
  // CANTOR_SET: 'cantorSet',
  KOCH_CURVE: 'kochCurve',
  PLANT: 'plant'
};

export const defaultOptions = {
  any: {
    start: { x: 0, y: 0 },
    lineColor: '#000000',
    iterations: 5
  },
  [fractalTypes.DRAGON_CURVE]: {
    start: { x: 600, y: 300 },
    lineColor: '#000000',
    iterations: 10
  },
  [fractalTypes.KOCH_CURVE]: {
    start: { x: 0, y: 0 },
    lineColor: '#000000',
    iterations: 3
  },
  [fractalTypes.PLANT]: {
    start: { x: 0, y: 200 },
    lineColor: '#000000',
    iterations: 4
  }
};
