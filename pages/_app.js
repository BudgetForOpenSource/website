import Router from "next/router";
import withGA from "next-ga";

export default withGA(
  "UA-43979816-7",
  Router
)(({ Component, pageProps }) => <Component {...pageProps} />);
