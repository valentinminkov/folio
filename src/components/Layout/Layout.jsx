import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Layout.module.scss";
import Link from "../Link/Link";

const navLinks = ["/", "/about", "/projects", "/contact"];

function getPathFromPathname(pathname) {
  switch (pathname) {
    case "/about":
      return "About";
    case "/projects":
      return "Projects";
    case "/contact":
      return "Contact";
    case "/":
      return "Home";
    default:
      return "Unkown page. Contact support.";
  }
}

const getNavLinks = (currentPath, links) => {
  return links.filter((link) => link !== currentPath);
};

const Nav = ({ path, links }) => (
  <div className={styles.navContainer}>
    <span className={styles.currentPageLabel}>{path}</span>
    <div className="grow"></div>
    {links.map((link) => {
      return (
        <Link key={link} href={link}>
          {getPathFromPathname(link)}
        </Link>
      );
    })}
  </div>
);

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const path = useMemo(() => getPathFromPathname(pathname), [pathname]);
  const links = getNavLinks(pathname, navLinks);
  return (
    <div className={styles.container}>
      <Nav path={path} links={links} />
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}
