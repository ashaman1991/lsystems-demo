import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import Menu from './components/Menu.component';
import Main from './components/main';
import Spirograph from './components/Spirograph.component';
import reducer from './reducers';

// Needed for onTouchTap
injectTapEventPlugin();

require('font-awesome-webpack');
require('./assets/styles/style.scss');

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // TODO: don't use in prod environment
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware))
);

// Build the middleware for intercepting and dispatching navigation actions

const theme = getMuiTheme(lightBaseTheme);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={history}>
        <Route path="/" component={Menu}>
          <IndexRoute component={Spirograph} />
          <Route path="/fractal" component={Main} />
          <Route path="/spirograph" component={Spirograph} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content')
);
