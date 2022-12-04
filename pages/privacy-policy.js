import Head from "next/head";
import PageWrapper from "../components/PageWrapper";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import styles from "../styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Privacy Policy - NamesLoL</title>
        <meta name="description" content="NamesLoL Privacy Policy" />
      </Head>

      <Title>Privacy Policy</Title>
      <Subtitle>
        NamesLoL uses third-party vendors such as Google for analytics and to
        serve personalized ads to our users.
      </Subtitle>

      <section className={styles.privacyPolicy}>
        <ul>
          <li>
            Third party vendors, including Google, use cookies to serve ads
            based on a user&apos;s prior visits to our website or other
            websites.
          </li>
          <li>
            Google&apos;s use of advertising cookies enables it and its partners
            to serve ads to users based on their visit to our site and/or other
            sites on the Internet.
          </li>
          <li>
            Users may opt out of personalized adveritsing by visiting
            Google&apos;s{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/settings/ads"
              className="link"
            >
              Ads Settings
            </a>
            .
          </li>
          <li>
            Users may also opt out of personalized advertising by visiting{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.aboutads.info/choices/"
              className="link"
            >
              www.aboutads.info
            </a>
            .
          </li>
        </ul>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
