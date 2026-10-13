import styles from "./MobileActionBar.module.css";
import { ShortNavigationBar } from "@kyralabs/m3e-react";
import { useLocation } from "react-router";

const ITEMS = [
  { key: "home", label: "Home", icon: "home", href: "/" },
  { key: "archive", label: "Archive", icon: "archive", href: "/archive" },
];

/**
 * M3 navigation bar for compact windows (the top app bar shows the same links from 600dp).
 * Items navigate client-side through react-router (React Aria RouterProvider in main.jsx); the
 * current route is the selected destination.
 */
export const MobileActionBar = () => {
  const { pathname } = useLocation();
  const selectedKey = pathname === "/" ? "home" : pathname.startsWith("/archive") ? "archive" : null;

  return (
    <ShortNavigationBar
      className={styles.bar}
      aria-label="Mobile navigation"
      items={ITEMS}
      selectedKey={selectedKey}
    />
  );
};
