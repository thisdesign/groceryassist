import React from "react";
import Link from "next/link";

const App = ({ pageProps, Component }) => {
  return (
    <div>
      <Link href="/">
        <a>GROCERY APP</a>
      </Link>
      <hr />

      <Component {...pageProps} />
      <style global jsx>
        {`
          html,
          body {
            font-family: helvetica, arial, sans-serif;
            font-size: 18px;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }

          h1 {
            font-size: 2.75rem;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.25rem;
          }
          h4 {
            font-size: 1.125rem;
          }
          h5 {
            font-size: 1rem;
          }

          hr {
            border: 0;
            border-bottom: 1px dashed black;
          }

          a {
            color: black;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default App;
