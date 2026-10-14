import styles from "./Section.module.css";
import { AlsoKnowCard } from "./AlsoKnowCard";

export function AlsoKnowSection({ stories }) {
  return (
    <section className={`pane ${styles.section}`} aria-labelledby="also-know-heading">
      <header className={styles.heading}>
        <p className={styles.kicker}>02</p>
        <div>
          <h2 id="also-know-heading">Also worth knowing</h2>
          <p>Shorter signals from the edges of the day.</p>
        </div>
      </header>
      <div className={styles.cards}>
        {stories.map((story) => (
          <AlsoKnowCard key={story.rank} {...story} />
        ))}
      </div>
    </section>
  );
}
