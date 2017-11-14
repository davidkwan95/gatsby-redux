import React from 'react';
import Link from 'gatsby-link';

const linkStyle = {
  color: 'hotpink',
};

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link style={linkStyle} to="/">Go back to the homepage</Link>
  </div>
);

export default SecondPage;
