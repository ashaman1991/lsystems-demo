import { connect } from 'react-redux';
import SideMenuComponent from './component';
import * as actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onRenderButtonClick: () => {
      dispatch(actions.render(true));
    },
    onColorChange: value => {
      dispatch(actions.changeOptions({ color: value.hex }));
    }
  };
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type,
    color: state.fractal.options.color
  };
};

const SideMenu = connect(mapStateToProps, mapDispatchToProps)(
  SideMenuComponent
);

export default SideMenu;
