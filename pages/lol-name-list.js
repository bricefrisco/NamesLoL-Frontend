import Head from "next/head";
import Moment from "react-moment";
import moment from "moment";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import DatePicker from "../components/DatePicker";
import PageWrapper from "../components/PageWrapper";
import Select from "../components/Select";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Button from "../components/Button";
import styles from "../styles/LoLNameList.module.css";
import { useEffect, useState } from "react";
import SummonerIcon from "../components/SummonerIcon";
import BackIcon from "../components/BackIcon";
import NextIcon from "../components/NextIcon";
import SideRailAd from "../components/SideRailAd";
import HorizontalAdDesktop from "../components/HorizontalAdDesktop";
import HorizontalAdMobile from "../components/HorizontalAdMobile";

const floorDate = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

export const getServerSideProps = async (context) => {
  const { region, date, backwards, nameLength } = context.query;

  let timestampQuery;
  if (date) {
    timestampQuery = date;
  } else {
    const startOfDay = floorDate(new Date());
    timestampQuery = startOfDay.getTime();
  }

  const backwardsQuery = backwards === "true" ? "true" : "false";

  const url = new URL(
    `${process.env.BACKEND_API}/${region?.toLowerCase() || "na"}/summoners`
  );
  url.searchParams.append("timestamp", String(timestampQuery));
  url.searchParams.append("backwards", String(backwardsQuery));
  if (nameLength && nameLength !== "any") {
    url.searchParams.append("nameLength", String(nameLength));
  }

  const res = await fetch(url.toString());
  const data = await res.json();

  return {
    props: {
      region: region?.toUpperCase() || "NA",
      nameLength: nameLength || "any",
      timestamp: timestampQuery,
      summoners: data?.summoners || null,
      backwards: data?.backwards || null,
      forwards: data?.forwards || null,
      isBackwards: backwards === "true",
      error: res.status !== 200,
    },
  };
};

const LoLNameList = ({
  region,
  nameLength,
  timestamp,
  summoners,
  backwards,
  forwards,
  isBackwards,
  error,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  let date;
  if (isBackwards && summoners?.length) {
    date = new Date(summoners[0].availabilityDate);
  } else {
    date = new Date(Number(timestamp));
  }

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
      url.startsWith("/lol-name-list?") &&
      url !== router.asPath &&
      setLoading(true);

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);

  const onRegionChange = (e) => {
    router.push(
      `/lol-name-list?region=${e.target.value.toLowerCase()}&nameLength=${nameLength}&date=${floorDate(
        date
      ).getTime()}`
    );
  };

  const onNameLengthChange = (e) => {
    router.push(
      `/lol-name-list?region=${region.toLowerCase()}&nameLength=${
        e.target.value
      }&date=${floorDate(date).getTime()}`
    );
  };

  const onDateChange = (date) => {
    router.push(
      `/lol-name-list?region=${region.toLowerCase()}&nameLength=${nameLength}&date=${floorDate(
        date
      ).getTime()}`
    );
  };

  const previousPage = `/lol-name-list?region=${region.toLowerCase()}&nameLength=${nameLength}&date=${
    backwards || floorDate(new Date()).getTime()
  }&backwards=true`;
  const nextPage = `/lol-name-list?region=${region.toLowerCase()}&nameLength=${nameLength}&date=${
    forwards || date.getTime()
  }`;

  return (
    <PageWrapper>
      <Head>
        <title>Expiring names list - NamesLoL</title>
        <meta
          name="description"
          content="Discover cool and unique League of Legends summoner names which have previously expired or are expiring soon."
        />
      </Head>

      <Title>Expiring Names List</Title>
      <Subtitle>
        Discover summoner names which have expired or are expiring soon
      </Subtitle>

      <HorizontalAdMobile id="name-list-m" />
      <HorizontalAdDesktop id="name-list-d" />

      <section className={styles.filters}>
        <div className={styles.regionContainer}>
          <Select title="Region" onChange={onRegionChange} value={region}>
            <option value="NA">North America (NA)</option>
            <option value="EUW">Europe West (EUW)</option>
            <option value="EUNE">Europe Nordic & East (EUNE)</option>
            <option value="OCE">Oceanic (OCE)</option>
            <option value="LAS">Latin America South (LAS)</option>
          </Select>
        </div>

        <div className={styles.nameLengthContainer}>
          <Select
            title="Name Length"
            onChange={onNameLengthChange}
            value={nameLength}
          >
            <option value="any">Any</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
          </Select>
        </div>

        <div className={styles.datePickerContainer}>
          <DatePicker
            title="Availability Date"
            selected={date}
            onChange={onDateChange}
          />
        </div>

        <div className={styles.paginationContainer}>
          <div className={styles.iconButton}>
            <Link href={previousPage}>
              <BackIcon />
            </Link>
          </div>
          <div className={styles.iconButton}>
            <Link href={nextPage}>
              <NextIcon />
            </Link>
          </div>
        </div>
      </section>

      {loading && (
        <section className={styles.loading}>
          <ReactLoading type="bubbles" color="#a09ccb" />
        </section>
      )}

      {!loading && !error && (
        <>
          <section className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th className={styles.mobileNone}>Level</th>
                  <th>Expires</th>
                  <th className={styles.expiryDate}>Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {summoners.map((summoner) => {
                  const availabilityDate = new Date(summoner.availabilityDate);

                  return (
                    <tr key={summoner.name}>
                      <td className={styles.nameCell}>
                        <Link
                          href={`/lol-name-checker?region=${region.toLowerCase()}&name=${
                            summoner.name
                          }`}
                          className="link"
                        >
                          <SummonerIcon
                            summonerIconId={summoner.summonerIcon}
                            width={40}
                            height={40}
                            draggable={false}
                          />
                          {summoner.name}
                        </Link>
                      </td>
                      <td className={styles.mobileNone}>{summoner.level}</td>
                      <td>{moment(availabilityDate).fromNow()}</td>
                      <td className={styles.expiryDate}>
                        <Moment
                          date={availabilityDate}
                          format="MM/DD/YYYY hh:mm:ss A"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          {summoners?.length ? (
            <>
              <div className={styles.bottomPagination}>
                <div style={{ width: "140px", marginRight: "25px" }}>
                  <Button link={previousPage} showBackIcon>
                    Previous
                  </Button>
                </div>
                <div style={{ width: "140px" }}>
                  <Button link={nextPage} showNextIcon>
                    Next
                  </Button>
                </div>
              </div>

              <section className={styles.disclaimer}>
                <p>
                  * The times shown are local to you and are in MM/DD/YYYY
                  format. Expiration dates are estimates we calculate using the
                  Summoner Name Decay rules. To learn more, visit our{" "}
                  <Link href="/frequently-asked-questions" className="link">
                    FAQ
                  </Link>
                  .
                </p>
              </section>
            </>
          ) : null}
        </>
      )}

      <SideRailAd id="name-list-right" />
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

export default LoLNameList;
