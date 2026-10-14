import styles from "./BlockLoader.module.css";
import { LoadingIndicator } from "@kyralabs/m3e-react";

/**
 * Loading state: the M3 Expressive loading indicator (contained). `page`: the whole page is
 * loading (the digest routes); the loader then fills the window so the footer stays below the
 * fold and doesn't jump when the digest arrives (layout shift).
 */
export const BlockLoader = ({ page = false }) => {
  return (
    <div className={`${styles.loadcontainer} ${page ? styles.page : ""}`}>
      <LoadingIndicator contained aria-label="Loading content" />
    </div>
  );
};
