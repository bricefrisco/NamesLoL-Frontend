import { useEffect, useState } from "react";
import styles from "./HorizontalAdMobile.module.css";

const HorizontalAdMobile = ({ id, style }) => {
  const [ad, setAd] = useState();

  useEffect(() => {
    const createAd = async () => {
      const ad = await window.nitroAds.createAd(id, {
        demo: process.env.NEXT_PUBLIC_ENVIRONMENT !== "production",
        format: "display",
        sizes: [[320, 50]],
        mediaQuery: "(max-width: 777px)",
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

  return <div id={id} style={style} className={styles.horizontalAdMobile} />;
};

export default HorizontalAdMobile;
