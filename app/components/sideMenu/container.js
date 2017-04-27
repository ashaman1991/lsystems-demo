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
    }
  };
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type,
    lineColor: state.fractal.options.lineColor
  };
};

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(
  SideMenuComponent
);

export default SideMenu;
