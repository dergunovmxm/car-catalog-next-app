import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { Titillium_Web } from "next/font/google";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Header: FC = () => {
  const { pathname } = useRouter();
  return (
    <div className={`${styles.header} ${titillium.className}`}>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        Home
      </Link>

      <Link
        href="/about-us"
        className={pathname === "/about-us" ? styles.active : ""}
      >
        About
      </Link>
    </div>
  );
};

export default Header;
