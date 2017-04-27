import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory, Router, Route } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Main from './components/main';
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

const theme = getMuiTheme(lightBaseTheme);

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('content')
);
