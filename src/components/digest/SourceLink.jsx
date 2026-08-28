import styles from "./SourceLink.module.css";

export function SourceLink({ firstName, firstUrl, secondName, secondUrl }) {
  return (
    <p className={styles.sources}>
      <span className={styles.label}>Sources:</span>{" "}
      <a href={firstUrl} target="_blank" rel="noreferrer">
        {firstName}<span aria-hidden="true"> ↗</span>
      </a>
      <span aria-hidden="true">, </span>
      <a href={secondUrl} target="_blank" rel="noreferrer">
        {secondName}<span aria-hidden="true"> ↗</span>
      </a>
    </p>
  );
}
