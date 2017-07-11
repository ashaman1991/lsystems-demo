import { connect } from 'react-redux';
import MainComponent from './component';
import actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onResize(e) {
      dispatch(
        actions.fractal.resize({
          width: e.target.innerWidth * 0.7,
          height: e.target.innerHeight * 0.8 // TODO: tweak these
        })
      );
    },
    onClick: () => {
      dispatch(actions.control.render(true));
    },
    onColorChange: value => {
      dispatch(actions.fractal.changeOptions({ lineColor: value.hex }));
    }
  };
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type,
    lineColor: state.fractal.options.lineColor
  };
};

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default Main;
