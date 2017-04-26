import { connect } from 'react-redux';
import MenuComponent from './component';
import * as actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onResize(e) {
      dispatch(
        actions.resize({
          width: e.target.innerWidth * 0.7,
          height: e.target.innerHeight * 0.8 // TODO: tweak these
        })
      );
    },
    onClick: () => {
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

const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

export default Menu;
