import { useEffect, useState } from "react";
import styles from "./HorizontalAdDesktop.module.css";

const HorizontalAdDesktop = ({ id, style }) => {
  const [ad, setAd] = useState();

  useEffect(() => {
    const createAd = async () => {
      const ad = await window.nitroAds.createAd(id, {
        demo: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
        format: "display",
        sizes: [[728, 90]],
        mediaQuery: "(min-width: 778px)",
        refreshVisibleOnly: true,
        renderVisibleOnly: true,
        refreshLimit: 10,
        refreshTime: 60,
        report: {
          enabled: true,
        },
      });

      setAd(ad);
    };

    createAd();
  }, [id]);

  return <div id={id} style={style} className={styles.horizontalAdDesktop} />;
};

export default HorizontalAdDesktop;
