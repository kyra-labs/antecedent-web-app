import styles from "./BlockLoader.module.css";
import { LoadingIndicator } from "@kyralabs/m3e-react";

/** Page-level loading state: the M3 Expressive loading indicator (contained). */
export const BlockLoader = () => {
  return (
    <div className={styles.loadcontainer}>
      <LoadingIndicator contained aria-label="Loading content" />
    </div>
  );
};
