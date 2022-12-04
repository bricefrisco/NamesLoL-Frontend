import Head from "next/head";
import Link from "next/link";
import FAQ from "../components/FAQ";
import HorizontalAd from "../components/HorizontalAd";
import PageWrapper from "../components/PageWrapper";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import styles from "../styles/FrequentlyAskedQuestions.module.css";

const FrequentlyAskedQuestions = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Frequently asked questions - NamesLoL</title>
        <meta
          name="description"
          content="Learn how we calculate name expiration dates with our LoL Name Checker. Discover tips to claiming expired summoner names."
        />
      </Head>

      <Title>Frequently Asked Questions</Title>
      <Subtitle>
        Learn how NamesLoL works, and tips to claming expired summoner names
      </Subtitle>

      <HorizontalAd />

      <section className={styles.frequentlyAskedQuestions}>
        <FAQ question="How do you estimate when summoner names expire?">
          We use the{" "}
          <a
            href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Summoner Name Decay Rules
          </a>{" "}
          which are published on the{" "}
          <a
            href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            League of Legends FAQ
          </a>
          . We take the summoners last activity date and use the simple formula
          specified in Riot&apos;s FAQ linked above to estimate the expiration
          date.
        </FAQ>

        <FAQ question="What time zones are the dates displayed in?">
          All times you see have been automatically converted to your local time
          zone (the time set on your PC or phone).
        </FAQ>

        <FAQ question="How often do you refresh/recheck summoner names?">
          We automatically refresh the summoner names listed on the site to keep
          the expiration dates up-to-date. Recently expired or upcoming names
          are refreshed hourly, while names farther out are refreshed weekly or
          monthly. Names in the lists are also updated when you check them using
          our{" "}
          <Link href="/lol-name-checker" className="link">
            LoL Name Checker
          </Link>
          .
        </FAQ>

        <FAQ question="Will more regions be supported in the future?">
          If you would like a region to be added, please let me know. You can
          send me a message via Reddit, I am the OP of{" "}
          <a
            href="https://www.reddit.com/r/leagueoflegends/comments/pe7xv1/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            this post
          </a>
          . If there is enough support for a particular region, we will add it.
        </FAQ>

        <FAQ question="Why did a name expire before/after the time listed?">
          This could happen for various reasons. We rely on the{" "}
          <a
            href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Summoner Name Decay Rules
          </a>{" "}
          which are published on the{" "}
          <a
            href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751914"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            League of Legends FAQ
          </a>{" "}
          to estimate name expiration dates. During our testing, we have found
          the rules which Riot makes publicly available are usually accurate.
          However, this is no guarantee that the name will become available at
          the specified time. The times listed are only estimates.
        </FAQ>

        <FAQ question="No matter what name I try, it says it's unavailable?">
          We have found during testing that Riot will throttle your account if
          you are checking names too frequently. This will cause any name
          checked to appear as if it were unavailable. We recommend slowing down
          and avoid checking name availability from the in-game client too
          frequently. In our case, these throttles went away in an hour or two.
        </FAQ>

        <FAQ question="Do you have any tips on grabbing the name I want?">
          Yes. We recommend against checking the name availability too
          frequently from the in-game client - doing so will get your account
          temporarily throttled and will make any name appear as if it were
          unavailable. Secondly, we recommend periodically checking the name
          availability before and after the time listed on the site. The times
          listed here are estimates and while they are usually accurate, there
          are cases where the estimated time has been off by a few minutes or
          even hours.
        </FAQ>
      </section>

      <HorizontalAd />
    </PageWrapper>
  );
};

export default FrequentlyAskedQuestions;
