import Layout from "../components/Layout";
import GlobalStyle from "../styles";
import FabMenu from "../components/FabMenu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <FabMenu />
    </>
  );
}
