import styles from "./MustKnowSection.module.css";
import { MustKnowCard } from "./MustKnowCard";

export function MustKnowSection({ stories }) {
  return (
    <section className={styles.section} aria-labelledby="must-know-heading">
      <header className={styles.heading}>
        <p className={styles.kicker}>01</p>
        <div>
          <h2 id="must-know-heading">Must know</h2>
          <p>The three stories that set the shape of today’s conversation.</p>
        </div>
      </header>
      <div className={styles.cards}>
        {stories.map((story) => (
          <MustKnowCard {...story} />
        ))}
      </div>
    </section>
  );
}
