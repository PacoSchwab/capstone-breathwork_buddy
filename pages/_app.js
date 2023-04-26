import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import FabMenu from "../components/FabMenu";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <FabMenu />
    </>
  );
}
