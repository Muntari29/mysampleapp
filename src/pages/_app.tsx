import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Muntari Test App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
