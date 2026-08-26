import styles from "./HistoricalContextTimeline.module.css";

export function HistoricalContextTimeline({
  headingId,
  firstDate,
  firstEvent,
  secondDate,
  secondEvent,
  thirdDate,
  thirdEvent,
}) {
  return (
    <section className={styles.timeline} aria-labelledby={headingId}>
      <header className={styles.heading}>
        <h4 id={headingId}>Historical thread</h4>
        <p>Earlier events that make this update legible.</p>
      </header>
      <ol className={styles.thread}>
        <li className={styles.node}>
          <time dateTime={firstDate}>{firstDate}</time>
          <span className={styles.marker} aria-hidden="true" />
          <p>{firstEvent}</p>
        </li>
        <li className={styles.node}>
          <time dateTime={secondDate}>{secondDate}</time>
          <span className={styles.marker} aria-hidden="true" />
          <p>{secondEvent}</p>
        </li>
        <li className={styles.node}>
          <time dateTime={thirdDate}>{thirdDate}</time>
          <span className={styles.marker} aria-hidden="true" />
          <p>{thirdEvent}</p>
        </li>
      </ol>
    </section>
  );
}
