import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <p>
          {date.getFullYear()} &copy;{" "}
          <Link href="/" className="link">
            NamesLoL
          </Link>
          . Open source. Like this project?{" "}
          <a
            href="https://github.com/bricefrisco/NamesLoL"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            View the code
          </a>{" "}
          and give it a star!
        </p>
        <p>
          To report a bug or request a feature,{" "}
          <a
            href="https://github.com/bricefrisco/NamesLoL/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            open an issue
          </a>
          .
        </p>
        <p>
          NamesLoL isn&apos;t endorsed by Riot Games and doesn&apos;t reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games, and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
