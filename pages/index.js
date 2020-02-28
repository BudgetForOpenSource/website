/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Head from "next/head";
import { Fragment } from "react";
import README from "../README.md";

const title = "Budget for Open Source";
const description =
  "We're asking companies that employ engineers to add a line item to their budget for open source, starting with just $100 per engineer per year.";
const image = "/ogimage.png";

export default () => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://budgetforopensource.org" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </Head>
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#e6eee6"
      }}
    >
      <img
        src="/assets/logo.png"
        css={{
          width: 160,
          height: "auto"
        }}
      />
    </div>
    <section css={{ display: "flex", justifyContent: "center" }}>
      <div
        css={{
          width: "100%",
          padding: 24,
          maxWidth: 800,
          minWidth: 0
        }}
      >
        <README />
      </div>
    </section>
  </Fragment>
);
