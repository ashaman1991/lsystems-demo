import { connect } from 'react-redux';
import HomeComponent from './component';
import actions from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    stopRender: () => {
      dispatch(actions.control.render(false));
    },
    exportReset: () => {
      dispatch(actions.control.exportImage(false));
    }
  };
};

const mapStateToProps = state => {
  return {
    height: state.canvas.height,
    width: state.canvas.width,
    type: state.fractal.type,
    options: state.fractal.options,
    shouldRender: state.control.shouldRender,
    exportImage: state.control.imageExport
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
