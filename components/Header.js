import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Header.module.css";

const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Name Checker",
    link: "/lol-name-checker",
  },
  {
    name: "Expiring Name List",
    link: "/lol-name-list",
  },
  {
    name: "Frequently Asked Questions",
    link: "/frequently-asked-questions",
  },
];

const Header = () => {
  const { pathname } = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const initialPathName = "/" + pathname.split("/")[1];

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="NamesLoL Logo"
          width={76}
          height={92}
          draggable={false}
        />

        <nav className={styles.navDesktop}>
          <ul>
            {routes.map((route) => (
              <li key={route.name}>
                <Link href={route.link}>
                  <span
                    className={
                      initialPathName === route.link
                        ? styles.selected
                        : undefined
                    }
                  >
                    {route.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className={
            mobileNavOpen
              ? `${styles.navMobile} ${styles.open}`
              : styles.navMobile
          }
        >
          <ul>
            {routes.map((route) => (
              <li key={route.name}>
                <Link href={route.link}>
                  <span
                    className={
                      initialPathName === route.link
                        ? styles.selected
                        : undefined
                    }
                  >
                    {route.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={styles.mobileNavContainer}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? (
            <Image
              src="/close.png"
              alt="Close Mobile Menu"
              width={22}
              height={22}
              draggable={false}
              className={styles.mobileNavMenu}
            />
          ) : (
            <Image
              src="/menu.png"
              alt="Open Mobile Menu"
              width={24}
              height={24}
              draggable={false}
              className={styles.mobileNavMenu}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
