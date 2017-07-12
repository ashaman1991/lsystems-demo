import { connect } from 'react-redux';
import SideMenuComponent from './component';
import actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onRenderButtonClick: () => {
      dispatch(actions.control.render(true));
    },
    onLineColorChange: value => {
      dispatch(actions.fractal.changeOptions({ lineColor: value.hex }));
    },
    onBackgroundColorChange: value => {
      dispatch(actions.fractal.changeOptions({ backgroundColor: value.hex }));
    },
    onStepChange: (e, value) => {
      dispatch(actions.fractal.changeOptions({ stepLength: value }));
    },
    onAnimateChange: (e, toggleState) => {
      dispatch(actions.fractal.changeOptions({ animate: toggleState }));
    },
    onSaveButtonClick: () => {
      dispatch(actions.control.exportImage(true));
    },
    onCancelButtonClick: () => {
      dispatch(actions.control.render(false));
    },
    onTypeChange: (event, _, value) => {
      dispatch(actions.fractal.changeType(value));
    }
  };
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type,
    lineColor: state.fractal.options.lineColor,
    backgroundColor: state.fractal.options.backgroundColor,
    stepLength: state.fractal.options.stepLength,
    animate: state.fractal.options.animate
  };
};

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(
  SideMenuComponent
);

export default SideMenu;
