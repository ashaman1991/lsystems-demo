import { connect } from 'react-redux';
import HomeComponent from './component';

const mapDispatchToProps = () => {
  return {};
};

const mapStateToProps = state => {
  return {
    height: state.canvas.height,
    width: state.canvas.width,
    type: state.fractal.type,
    options: state.fractal.options
  };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
