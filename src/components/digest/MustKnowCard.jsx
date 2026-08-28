import styles from "./MustKnowCard.module.css";
import { Badge } from "../common/Badge";
import { HistoricalContextTimeline } from "./HistoricalContextTimeline";
// import { SourceLink } from "./SourceLink";

export function MustKnowCard({ rank, events }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <p className={styles.rank}>{String(rank).padStart(2, "0")}</p>
        <div className={styles.titleBlock}>
          <h3>{events.title}</h3>
          <div className={styles.meta}>
            <Badge tone="category">{events.category}</Badge>
            <span className={styles.score}>
              Importance {events.importance_score} / 100
            </span>
          </div>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.summary}>{events.what_happened}</p>

        <section className={styles.textBlock}>
          <h4>How we got here</h4>
          <p>{events.background}</p>
        </section>

        <section className={styles.textBlock}>
          <h4>What changed</h4>
          <ul>
            {events.what_changed?.map((changed) => {
              return <li>{changed}</li>;
            })}
          </ul>
        </section>

        <section className={styles.textBlock}>
          <h4>Why it matters</h4>
          <ul>
            {events.why_it_matters?.map((matters) => {
              return <li>{matters}</li>;
            })}
          </ul>
        </section>

        {events.uncertainties && (
          <section className={`${styles.textBlock} ${styles.uncertainties}`}>
            <h4>Not yet known</h4>
            <ul>
              {events.uncertainties?.map((uncertainty) => {
                return <li>{uncertainty}</li>;
              })}
            </ul>
          </section>
        )}

        <HistoricalContextTimeline
          headingId={`timeline-${rank}`}
          events={events.timeline}
        />
        {/* <SourceLink
          firstName={sources.firstName}
          firstUrl={sources.firstUrl}
          secondName={sources.secondName}
          secondUrl={sources.secondUrl}
        /> */}
      </div>
    </article>
  );
}
