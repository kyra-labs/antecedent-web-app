import styles from "./DigestHeader.module.css";
import { Icon } from "@kyralabs/m3e-react";
import { Shape } from "../common/Shape";

export function DigestHeader({ title, readingTime, introduction, edition }) {
  // From expanded windows an art pane (Material shapes on primary-container) sits beside the
  // header, as on m3.material.io; decorative only.
  return (
    <div className={styles.top}>
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
      <div className={`pane ${styles.art}`} aria-hidden="true">
        <Shape name="Flower" className={styles.shapeA} />
        <Shape name="Sunny" className={styles.shapeB} />
        <Shape name="Pill" className={styles.shapeC} />
      </div>
    </div>
  );
}
