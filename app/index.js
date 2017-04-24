import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {
  orange400,
  orange900,
  orange200,
  orange50,
  grey400
} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { hashHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import Menu from './components/menu';
import reducer from './reducers';

// Needed for onTouchTap
injectTapEventPlugin();

require('font-awesome-webpack');
require('./assets/styles/style.scss');

const middleware = routerMiddleware(hashHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // TODO: don't use in prod environment
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware))
);
const history = syncHistoryWithStore(hashHistory, store);

const theme = getMuiTheme(lightBaseTheme, {
  palette: {
    primary1Color: orange400,
    primary2Color: orange200,
    primary3Color: grey400,
    accent1Color: orange900,
    accent2Color: orange50,
    accent3Color: grey400
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Menu} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('content')
);
