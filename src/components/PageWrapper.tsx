import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const PageWrapper = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex min-h-screen flex-col bg-gray-900 text-white">
        <Header />
        <div className="container mx-auto max-w-screen-xl grow py-6 px-3.5 md:py-12">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
