import Head from "next/head";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import LargeTitle from "../components/LargeTitle";
import styles from "../styles/Home.module.css";
import SmallTitle from "../components/SmallTitle";
import Subtitle from "../components/Subtitle";
import Button from "../components/Button";

const Home = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Name checker and expiring names list - NamesLoL</title>
        <meta
          name="description"
          content="League of Legends name availability checker. Discover cool and unique summoner names using our expiring names list."
        />
      </Head>

      <LargeTitle>NamesLoL</LargeTitle>

      <section className={styles.section}>
        <SmallTitle>League of Legends Name Checker</SmallTitle>
        <Subtitle>
          Use our{" "}
          <Link href="/lol-name-checker" className="link">
            LoL Name Checker
          </Link>{" "}
          to find out if a summoner name is available or when it is going to
          expire.
        </Subtitle>
        <div style={{ marginTop: "15px", maxWidth: 300 }}>
          <Button link="/lol-name-checker" showNextIcon>
            Name Checker
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <SmallTitle>League of Legends Expiring Names List</SmallTitle>
        <Subtitle>
          Use our{" "}
          <Link href="/lol-name-list" className="link">
            LoL Expiring Names List
          </Link>{" "}
          to discover summoner names which have expired or will expire soon.
          After summoner names expire, they are up for grabs for anyone with an
          existing LoL account! You can also view our lists to gather some
          League of Legends name ideas.
        </Subtitle>
        <div style={{ marginTop: "15px", maxWidth: 300 }}>
          <Button link="/lol-name-list" showNextIcon>
            Expiring Names List
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <SmallTitle>Frequently Asked Questions</SmallTitle>
        <Subtitle>
          Wondering how we know when names are going to expire? Or perhaps our
          name checker says a name is available, but you&lsquo;re unable to
          claim it for yourself. Our{" "}
          <Link href="/frequently-asked-questions" className="link">
            Frequently Asked Questions
          </Link>{" "}
          address common questions such as these, and also give you valuable
          tips on how to capture names after they expire.
        </Subtitle>
        <div style={{ marginTop: "15px", maxWidth: 300 }}>
          <Button link="/frequently-asked-questions" showNextIcon>
            FAQ
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
