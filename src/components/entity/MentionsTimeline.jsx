import styles from "./MentionsTimeline.module.css";

export function MentionsTimeline() {
  return (
    <section className={styles.section} aria-labelledby="mentions-heading">
      <header className={styles.heading}>
        <h2 id="mentions-heading">Mentions over time</h2>
        <p>Six months of appearances in the digest.</p>
      </header>
      <div className={styles.chart} role="img" aria-label="Bar chart showing OpenAI mentions from March to August">
        <div className={styles.column}><span className={styles.barSmall} /><span>Mar</span></div>
        <div className={styles.column}><span className={styles.barMedium} /><span>Apr</span></div>
        <div className={styles.column}><span className={styles.barLow} /><span>May</span></div>
        <div className={styles.column}><span className={styles.barTall} /><span>Jun</span></div>
        <div className={styles.column}><span className={styles.barMedium} /><span>Jul</span></div>
        <div className={`${styles.column} ${styles.highlight}`}><span className={styles.barHighest} /><span>Aug</span></div>
      </div>
    </section>
  );
}
