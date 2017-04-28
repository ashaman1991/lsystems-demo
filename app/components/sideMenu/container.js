import { connect } from 'react-redux';
import SideMenuComponent from './component';
import * as actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onRenderButtonClick: () => {
      dispatch(actions.render(true));
    },
    onLineColorChange: value => {
      dispatch(actions.changeOptions({ lineColor: value.hex }));
    },
    onBackgroundColorChange: value => {
      dispatch(actions.changeOptions({ backgroundColor: value.hex }));
    },
    onStepChange: (e, value) => {
      dispatch(actions.changeOptions({ stepLength: value }));
    }
  };
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type,
    lineColor: state.fractal.options.lineColor,
    backgroundColor: state.fractal.options.backgroundColor,
    stepLength: state.fractal.options.stepLength
  };
};

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(
  SideMenuComponent
);

export default SideMenu;
