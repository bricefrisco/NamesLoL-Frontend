import styles from "./HorizontalAd.module.css";

const HorizontalAd = () => {
  return (
    <div className={styles.adContainer}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2544101606273007"
        data-ad-slot="7512965499"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default HorizontalAd;
