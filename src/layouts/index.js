import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';

import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby Redux
        </Link>
      </h1>
    </div>
  </div>
);

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
        {children()}
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
