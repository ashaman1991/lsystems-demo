/* eslint-disable */
import presets from './presets';

export default class LSystem {
  constructor(type = '', customPreset) {
    const preset = presets[type] || customPreset;
    this.axiom = preset.axiom;
    this.ruleset = preset.ruleset;
    this.getPoints = preset.getPoints;
  }
  getPoints() {}
  applyRuleset(iterations = 1) {
    let result = '';
    let start = this.axiom;
    for (let index = 0; index < iterations; index++) {
      result = '';
      for (let i = 0; i < start.length; i++) {
        result += this.ruleset(this.ruleset(start[i]));
      }
      start = result.slice(0);
    }
    return start;
  }
}

LSystem.types = {
  SERPINSKY_TRIANGLE: 'serpinskyTriangle',
  SERPINSKY_CURVE: 'serpinskyCurve',
  DRAGON_CURVE: 'dragonCurve',
  CANTOR_SET: 'cantorSet',
  KOCH_CURVE: 'kochCurve'
};
