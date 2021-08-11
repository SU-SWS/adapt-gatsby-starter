import React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};

// markup
const IndexPage = () => (
  <main style={pageStyles}>
    <h1 style={headingStyles}>Adapt Gatsby Starter</h1>
    <p style={paragraphStyles}>TODO: Document</p>
  </main>
);

export default IndexPage;
