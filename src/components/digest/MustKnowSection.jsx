import styles from "./Section.module.css";
import { Shape } from "../common/Shape";
import { MustKnowCard } from "./MustKnowCard";

export function MustKnowSection({ stories }) {
  return (
    <section className={`pane ${styles.section}`} aria-labelledby="must-know-heading">
      <header className={styles.heading}>
        <p className={styles.kicker}>
          <Shape name="Cookie9Sided" className={styles.kickerShape} />
          <span>01</span>
        </p>
        <div>
          <h2 id="must-know-heading">Must know</h2>
          <p>The three stories that set the shape of today’s conversation.</p>
        </div>
      </header>
      <div className={styles.cards}>
        {stories.map((story) => (
          <MustKnowCard key={story.rank} {...story} />
        ))}
      </div>
    </section>
  );
}
