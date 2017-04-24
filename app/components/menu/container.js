import { connect } from 'react-redux';
import MenuComponent from './component';

const mapDispatchToProps = () => {
  return {};
};

const mapStateToProps = state => {
  return {
    type: state.fractal.type
  };
};

const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

export default Menu;
