import React from 'react';
import Link from 'gatsby-link';
import CounterContainer from '../containers/CounterContainer';

const linkStyle = {
  color: 'hotpink',
};

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link style={linkStyle} to="/page-2/">Go to page 2</Link>
    <CounterContainer />
  </div>
);

export default IndexPage;
