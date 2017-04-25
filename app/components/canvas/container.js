import { connect } from 'react-redux';
import HomeComponent from './component';
import * as actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    stopRender: () => {
      dispatch(actions.render(false));
    }
  };
};

const mapStateToProps = state => {
  return {
    height: state.canvas.height,
    width: state.canvas.width,
    type: state.fractal.type,
    options: state.fractal.options,
    shouldRender: state.canvas.shouldRender
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
