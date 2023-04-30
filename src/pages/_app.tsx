import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress height={3} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
