import styles from "./MustKnowCard.module.css";
import { Badge } from "../common/Badge";
import { HistoricalContextTimeline } from "./HistoricalContextTimeline";
import { SourceLink } from "./SourceLink";

export function MustKnowCard({
  rank,
  title,
  category,
  score,
  summary,
  background,
  changedOne,
  changedTwo,
  changedThree,
  mattersOne,
  mattersTwo,
  mattersThree,
  unknownOne,
  unknownTwo,
  unknownThree,
  timeline,
  sources,
}) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <p className={styles.rank}>{String(rank).padStart(2, "0")}</p>
        <div className={styles.titleBlock}>
          <h3>{title}</h3>
          <div className={styles.meta}>
            <Badge tone="category">{category}</Badge>
            <span className={styles.score}>Importance {score}</span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>

        <section className={styles.textBlock}>
          <h4>How we got here</h4>
          <p>{background}</p>
        </section>

        <section className={styles.textBlock}>
          <h4>What changed</h4>
          <ul>
            <li>{changedOne}</li>
            {changedTwo && <li>{changedTwo}</li>}
            {changedThree && <li>{changedThree}</li>}
          </ul>
        </section>

        <section className={styles.textBlock}>
          <h4>Why it matters</h4>
          <ul>
            <li>{mattersOne}</li>
            {mattersTwo && <li>{mattersTwo}</li>}
            {mattersThree && <li>{mattersThree}</li>}
          </ul>
        </section>

        {unknownOne && (
          <section className={`${styles.textBlock} ${styles.uncertainties}`}>
            <h4>Not yet known</h4>
            <ul>
              <li>{unknownOne}</li>
              {unknownTwo && <li>{unknownTwo}</li>}
              {unknownThree && <li>{unknownThree}</li>}
            </ul>
          </section>
        )}

        <HistoricalContextTimeline
          headingId={`timeline-${rank}`}
          firstDate={timeline.firstDate}
          firstEvent={timeline.firstEvent}
          secondDate={timeline.secondDate}
          secondEvent={timeline.secondEvent}
          thirdDate={timeline.thirdDate}
          thirdEvent={timeline.thirdEvent}
        />
        <SourceLink
          firstName={sources.firstName}
          firstUrl={sources.firstUrl}
          secondName={sources.secondName}
          secondUrl={sources.secondUrl}
        />
      </div>
    </article>
  );
}
