import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import FabMenu from "../components/FabMenu";
import Header from "../components/Header";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Breathwork Buddy</title>
        <meta name="description" content="Breathwork Buddy"></meta>
      </Head>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <FabMenu />
    </>
  );
}
