/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Head from 'next/head';
import { Fragment } from 'react';
import README from '../README.md';

const title = 'Budget for Open Source';
const description =
  "We're asking companies that employ engineers to add a line item to their budget for open source, starting with just $100 per engineer per year.";
const url = 'https://budgetforopensource.org';
const image = `${url}/ogimage.png`;

export default () => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </Head>
    <section css={{ display: 'flex', justifyContent: 'center' }}>
      <div css={{ width: '100%', maxWidth: 800, minWidth: 0 }}>
        <div
          // https://github.com/sindresorhus/github-markdown-css
          css={css`
            details {
              display: block;
            }

            summary {
              display: list-item;
            }

            a {
              background-color: initial;
            }

            a:active,
            a:hover {
              outline-width: 0;
            }

            strong {
              font-weight: inherit;
              font-weight: bolder;
            }

            h1 {
              font-size: 2em;
              margin: 0.67em 0;
            }

            img {
              border-style: none;
            }

            code,
            kbd,
            pre {
              font-family: monospace, monospace;
              font-size: 1em;
            }
            hr {
              box-sizing: initial;
              height: 0;
              overflow: visible;
            }

            input {
              font: inherit;
              margin: 0;
            }

            input {
              overflow: visible;
            }

            [type='checkbox'] {
              box-sizing: border-box;
              padding: 0;
            }

            * {
              box-sizing: border-box;
            }

            input {
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
            }

            a {
              color: #0366d6;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            strong {
              font-weight: 600;
            }

            hr {
              height: 0;
              margin: 15px 0;
              overflow: hidden;
              background: transparent;
              border: 0;
              border-bottom: 1px solid #dfe2e5;
            }

            hr:after,
            hr:before {
              display: table;
              content: '';
            }

            hr:after {
              clear: both;
            }

            table {
              border-spacing: 0;
              border-collapse: collapse;
            }

            td,
            th {
              padding: 0;
            }

            details summary {
              cursor: pointer;
            }

            kbd {
              display: inline-block;
              padding: 3px 5px;
              font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo,
                monospace;
              line-height: 10px;
              color: #444d56;
              vertical-align: middle;
              background-color: #fafbfc;
              border: 1px solid #d1d5da;
              border-radius: 3px;
              box-shadow: inset 0 -1px 0 #d1d5da;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin-top: 0;
              margin-bottom: 0;
            }

            h1 {
              font-size: 32px;
            }

            h1,
            h2 {
              font-weight: 600;
            }

            h2 {
              font-size: 24px;
            }

            h3 {
              font-size: 20px;
            }

            h3,
            h4 {
              font-weight: 600;
            }

            h4 {
              font-size: 16px;
            }

            h5 {
              font-size: 14px;
            }

            h5,
            h6 {
              font-weight: 600;
            }

            h6 {
              font-size: 12px;
            }

            p {
              margin-top: 0;
              margin-bottom: 10px;
            }

            blockquote {
              margin: 0;
            }

            ol,
            ul {
              padding-left: 0;
              margin-top: 0;
              margin-bottom: 0;
            }

            ol ol,
            ul ol {
              list-style-type: lower-roman;
            }

            ol ol ol,
            ol ul ol,
            ul ol ol,
            ul ul ol {
              list-style-type: lower-alpha;
            }

            dd {
              margin-left: 0;
            }

            code,
            pre {
              font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
                monospace;
              font-size: 12px;
            }

            pre {
              margin-top: 0;
              margin-bottom: 0;
            }

            input::-webkit-inner-spin-button,
            input::-webkit-outer-spin-button {
              margin: 0;
              -webkit-appearance: none;
              appearance: none;
            }

            :checked + .radio-label {
              position: relative;
              z-index: 1;
              border-color: #0366d6;
            }

            hr {
              border-bottom-color: #eee;
            }

            kbd {
              display: inline-block;
              padding: 3px 5px;
              font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo,
                monospace;
              line-height: 10px;
              color: #444d56;
              vertical-align: middle;
              background-color: #fafbfc;
              border: 1px solid #d1d5da;
              border-radius: 3px;
              box-shadow: inset 0 -1px 0 #d1d5da;
            }

            > :first-child {
              margin-top: 0 !important;
            }

            > :last-child {
              margin-bottom: 0 !important;
            }

            a:not([href]) {
              color: inherit;
              text-decoration: none;
            }

            blockquote,
            details,
            dl,
            ol,
            p,
            pre,
            table,
            ul {
              margin-top: 0;
              margin-bottom: 16px;
            }

            hr {
              height: 0.25em;
              padding: 0;
              margin: 24px 0;
              background-color: #e1e4e8;
              border: 0;
            }

            blockquote {
              padding: 0 1em;
              color: #6a737d;
              border-left: 0.25em solid #dfe2e5;
            }

            blockquote > :first-child {
              margin-top: 0;
            }

            blockquote > :last-child {
              margin-bottom: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin-top: 24px;
              margin-bottom: 16px;
              font-weight: 600;
              line-height: 1.25;
            }

            h1 {
              font-size: 2em;
            }

            h1,
            h2 {
              padding-bottom: 0.3em;
              border-bottom: 1px solid #eaecef;
            }

            h2 {
              font-size: 1.5em;
            }

            h3 {
              font-size: 1.25em;
            }

            h4 {
              font-size: 1em;
            }

            h5 {
              font-size: 0.875em;
            }

            h6 {
              font-size: 0.85em;
              color: #6a737d;
            }

            ol,
            ul {
              padding-left: 2em;
            }

            ol ol,
            ol ul,
            ul ol,
            ul ul {
              margin-top: 0;
              margin-bottom: 0;
            }

            li {
              word-wrap: break-all;
            }

            li > p {
              margin-top: 16px;
            }

            li + li {
              margin-top: 0.25em;
            }

            dl {
              padding: 0;
            }

            dl dt {
              padding: 0;
              margin-top: 16px;
              font-size: 1em;
              font-style: italic;
              font-weight: 600;
            }

            dl dd {
              padding: 0 16px;
              margin-bottom: 16px;
            }

            table {
              display: block;
              width: 100%;
              overflow: auto;
            }

            table th {
              font-weight: 600;
            }

            table td,
            table th {
              padding: 6px 13px;
              border: 1px solid #dfe2e5;
            }

            table tr {
              background-color: #fff;
              border-top: 1px solid #c6cbd1;
            }

            table tr:nth-child(2n) {
              background-color: #f6f8fa;
            }

            img {
              max-width: 100%;
              box-sizing: initial;
              background-color: #fff;
            }

            img[align='right'] {
              padding-left: 20px;
            }

            img[align='left'] {
              padding-right: 20px;
            }

            code {
              padding: 0.2em 0.4em;
              margin: 0;
              font-size: 85%;
              background-color: rgba(27, 31, 35, 0.05);
              border-radius: 3px;
            }
          `}
        >
          <div css={{ padding: 16 }}>
            <README />
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);
