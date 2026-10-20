import styles from "./Section.module.css";
import { Shape } from "../common/Shape";
import { AlsoKnowCard } from "./AlsoKnowCard";

export function AlsoKnowSection({ stories }) {
  return (
    <section className={`pane ${styles.section}`} aria-labelledby="also-know-heading">
      <header className={styles.heading}>
        <p className={styles.kicker}>
          <Shape name="Cookie9Sided" className={styles.kickerShape} />
          <span>02</span>
        </p>
        <div>
          <h2 id="also-know-heading">Also worth knowing</h2>
          <p>Shorter signals from the edges of the day.</p>
        </div>
      </header>
      <div className={`${styles.cards} ${styles.segmented}`}>
        {stories.map((story) => (
          <AlsoKnowCard key={story.rank} {...story} />
        ))}
      </div>
    </section>
  );
}
