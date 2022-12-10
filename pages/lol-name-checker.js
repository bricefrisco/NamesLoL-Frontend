import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Moment from "react-moment";
import Link from "next/link";
import ReactLoading from "react-loading";
import styles from "../styles/LoLNameChecker.module.css";
import PageWrapper from "../components/PageWrapper";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import SmallTitle from "../components/SmallTitle";
import SummonerIcon from "../components/SummonerIcon";
import HorizontalAdMobile from "../components/HorizontalAdMobile";
import HorizontalAdDesktop from "../components/HorizontalAdDesktop";
import SideRailAd from "../components/SideRailAd";

export const getServerSideProps = async (context) => {
  const { region, name } = context.query;

  if (region && name) {
    const res = await fetch(
      `${process.env.BACKEND_API}/${region}/summoner/${name}`
    );

    const summoner = await res.json();

    return {
      props: {
        initialRegion: region,
        initialName: name,
        summoner,
        found: res.status === 200,
        notFound: res.status === 404,
        error: res.status !== 200 && res.status !== 404,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

const LoLNameChecker = ({
  initialRegion,
  initialName,
  summoner,
  found,
  notFound,
  error,
}) => {
  const router = useRouter();

  const [name, setName] = useState(initialName ? initialName : "");
  const [region, setRegion] = useState(
    initialRegion ? initialRegion.toUpperCase() : "NA"
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(
        "Oh no! An error occurred. Please check your inputs and try again."
      );
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }

    const handleStart = (url) =>
      url.startsWith("/lol-name-checker?") &&
      url !== router.asPath &&
      setLoading(true);

    router.events.on("routeChangeStart", handleStart);
    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);

  const url = `/lol-name-checker?region=${region.toLowerCase()}&name=${name.toLowerCase()}`;

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      router.push(url);
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const available = summoner && summoner?.availabilityDate <= Date.now();
  const decay = Math.min(30, Math.max(6, summoner?.level));

  return (
    <PageWrapper>
      <Head>
        <title>Name availability checker - NamesLoL</title>
        <meta
          name="description"
          content="League of Legends name checker. Find out if a summoner name is available, or exactly when it is going to expire"
        />
      </Head>

      <Title>Name Checker</Title>
      <Subtitle>
        Find out if a summoner name is available or exactly when it is going to
        expire.
      </Subtitle>

      <HorizontalAdDesktop id="name-checker-d" style={{ marginTop: 25 }} />
      <HorizontalAdMobile
        id="name-checker-m"
        style={{ marginTop: 20, paddingBottom: 5 }}
      />

      <section className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <Input
              title="* Summoner Name"
              placeholder="Summoner Name"
              onChange={onNameChange}
              onKeyPress={onKeyPress}
              value={name}
            />
          </div>
          <div className={styles.input}>
            <Select
              title="* Region"
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            >
              <option value="NA">North America (NA)</option>
              <option value="EUW">Europe West (EUW)</option>
              <option value="EUNE">Europe Nordic & East (EUNE)</option>
              <option value="OCE">Oceanic (OCE)</option>
              <option value="LAS">Latin America South (LAS)</option>
            </Select>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button link={url} disabled={name?.length < 3} showNextIcon>
            Check Availability
          </Button>
        </div>
      </section>

      {loading && (
        <section className={styles.loading}>
          <ReactLoading type="bubbles" color="#a09ccb" />
        </section>
      )}

      {!loading && (
        <>
          <section className={styles.availability}>
            {found && (
              <>
                <SmallTitle>
                  Summoner name &apos;{summoner.name.toLowerCase()}&apos; is{" "}
                  {available ? (
                    <span className={styles.available}>available</span>
                  ) : (
                    <span className={styles.unavailable}>unavailable</span>
                  )}
                  .
                </SmallTitle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 15,
                    paddingBottom: 5,
                  }}
                >
                  <SummonerIcon
                    summonerIconId={summoner.summonerIcon}
                    width={64}
                    height={64}
                    draggable={false}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.info} style={{ marginTop: 0 }}>
                      <span className={styles.infoLabel}>Level:</span>{" "}
                      {summoner.level}
                    </p>
                    <p className={styles.info} style={{ marginTop: 3 }}>
                      <span className={styles.infoLabel}>Last Activity:</span>{" "}
                      <Moment
                        date={new Date(summoner.revisionDate)}
                        format="MM/DD/YYYY hh:mm:ss A"
                      />
                    </p>
                  </div>
                </div>
                <p className={styles.info}>
                  <span className={styles.infoLabel}>Name Decay:</span> min(30,
                  max(6, {summoner.level})) = {decay} months
                </p>
                <p className={styles.info}>
                  <span className={styles.infoLabel}>
                    {available ? "Expired:" : "Expires:"}
                  </span>{" "}
                  <Moment
                    date={new Date(summoner.availabilityDate)}
                    format="MM/DD/YYYY hh:mm:ss A"
                  />
                </p>
              </>
            )}

            {notFound && (
              <>
                <SmallTitle>
                  Summoner name &apos;{initialName}&apos; is{" "}
                  <span className={styles.available}>available</span>.
                </SmallTitle>
                <p className={styles.info}>
                  We found no summoner who currently has this name.
                </p>
              </>
            )}
          </section>

          <section className={styles.disclaimer}>
            {found && (
              <p>
                * The times shown are local to you and are in MM/DD/YYYY format.
                Expiration dates are estimates we calculate using the Summoner
                Name Decay rules. To learn more, visit our{" "}
                <Link href="/frequently-asked-questions" className="link">
                  FAQ
                </Link>
                .
              </p>
            )}

            {notFound && (
              <p>
                * The name could be invalid, blocked by Riot, or taken by a
                banned summoner.
              </p>
            )}
          </section>
        </>
      )}
      <SideRailAd id="name-checker-right" mediaMinWidth="1500px" />
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#181b1e",
            color: "rgba(234, 242, 247, 1)",
          },
        }}
      />
    </PageWrapper>
  );
};

export default LoLNameChecker;
