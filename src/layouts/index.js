import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Header from './Header';
import './index.css';
import rootReducer from '../rootReducer';

const store = createStore(rootReducer);

injectTapEventPlugin();

const paperStyle = {
  minHeight: '100vh',
  padding: '30px 60px',
};
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Redux"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Paper style={paperStyle}>
        <Provider store={store}>
          {children()}
        </Provider>
      </Paper>
    </MuiThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
