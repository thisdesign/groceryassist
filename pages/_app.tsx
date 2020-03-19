import React from "react";

const App = ({ pageProps, Component }) => {
  return (
    <div>
      <Component {...pageProps} />

      <style global jsx>
        {`
          div {
            border: 1px solid blue;
            border-radius: 6px;
            padding: 0.25rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default App;
