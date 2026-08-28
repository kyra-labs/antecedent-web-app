import styles from "./HistoricalContextTimeline.module.css";

export function HistoricalContextTimeline({ headingId, events }) {
  return (
    <section className={styles.timeline} aria-labelledby={headingId}>
      <header className={styles.heading}>
        <h4 id={headingId}>Historical thread</h4>
        <p>Earlier events that make this update legible.</p>
      </header>
      <ol className={styles.thread}>
        {events.map((event, index) => {
          return (
            <li key={`${headingId}_${index}`} className={styles.node}>
              <time dateTime={event?.date}>{event?.date}</time>
              <span className={styles.marker} aria-hidden="true" />
              <p>{event?.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
