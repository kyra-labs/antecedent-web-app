import styles from "./HistoricalContextTimeline.module.css";

// Every story has a "Historical thread"; the story's title joins the region's name so each region
// is unique ("Historical thread, <title>"), as landmarks must be.
export function HistoricalContextTimeline({ headingId, storyTitleId, events }) {
  return (
    <section
      className={styles.timeline}
      aria-labelledby={storyTitleId ? `${headingId} ${storyTitleId}` : headingId}
    >
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
