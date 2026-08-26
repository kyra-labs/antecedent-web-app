import styles from "./MobileActionBar.module.css";

export const MobileActionBar = () => {
  return (
    <nav className={styles.bar} aria-label="Mobile navigation">
      <a href="/" className={styles.action} aria-current="page">
        {/* icon */} Home
      </a>
      <a href="/archive" className={styles.action}>
        {/* icon */} Archive
      </a>
      <a href="/search" className={styles.action}>
        {/* icon */} Search
      </a>
    </nav>
  );
};
