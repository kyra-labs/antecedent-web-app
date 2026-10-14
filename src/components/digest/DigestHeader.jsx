import styles from "./DigestHeader.module.css";
import { Icon } from "@kyralabs/m3e-react";

export function DigestHeader({ title, readingTime, introduction, edition }) {
  return (
    <header className={`pane ${styles.header}`}>
      <div className={styles.editionLine}>
        <span>{edition}</span>
        <span className={styles.rule} aria-hidden="true" />
        <span>Context before commentary</span>
      </div>
      <div className={styles.titleRow}>
        <h1>{title}</h1>
        <span className={styles.readingTime}>
          <Icon name="schedule" />
          {readingTime}
        </span>
      </div>
      <p className={styles.introduction}>{introduction}</p>
    </header>
  );
}
