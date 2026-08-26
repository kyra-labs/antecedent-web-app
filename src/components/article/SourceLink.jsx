import styles from "./SourceLink.module.css";

export function SourceLink() {
  return (
    <a className={styles.link} href="https://techcrunch.com/" target="_blank" rel="noreferrer">
      <span>Read the original at TechCrunch</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
