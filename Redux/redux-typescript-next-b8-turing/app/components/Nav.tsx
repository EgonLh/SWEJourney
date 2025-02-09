"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();
    console.log("Pathname ",pathname)
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/todos" ? styles.active : ""
            }`}
            href="/todos"
        >
            Todo
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/totalTodo" ? styles.active : ""
            }`}
            href="/totalTodo"
        >
            Total
        </Link>
        <Link
            className={`${styles.link} ${
                pathname === "/movies" ? styles.active : ""
            }`}
            href="/movies"
        >
            Movie
        </Link>
    </nav>
  );
};
