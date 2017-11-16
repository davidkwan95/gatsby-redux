const ghpages = require('gh-pages');

ghpages.publish('public', {
  repo: `https://github.com/davidkwan95/gatsby-redux.git`,
}, console.log);
