const path = require('path');

exports.createPages = async ({ actions: { createPage } }) => {
  const serverOnlySecret = process.env.SERVER_VARIABLE || 'No secret was loaded...';
  const netlifyContext = process.env.CONTEXT;

  createPage({
    path: '/template/',
    component: path.resolve("src/templates/template.jsx"),
    context: {
      serverOnlySecret,
      netlifyContext,
    }
  })
};
