import React from "react";

const Template = ({ pageContext }) => (
  <div>
    <h1>My Template Page</h1>
    <p>
      Netlify Context:{" "}
      <b>{pageContext.netlifyContext || "NO NETLIFY CONTEXT"}</b>
    </p>
    <p>
      Secret Server Environment Variable: <b>{pageContext.serverOnlySecret}</b>
    </p>
    <p>
      Client Environment Variable:{" "}
      <b>{process.env.GATSBY_CLIENT_VARIABLE || "NO CLIENT VARIABLE"}</b>
    </p>
  </div>
);

export default Template;
