import styles from "./AlsoKnowCard.module.css";
import { Badge } from "../common/Badge";

export function AlsoKnowCard({ rank, events }) {
  return (
    <button className={styles.card} type="button" aria-expanded="false">
      <span className={styles.row}>
        <span className={styles.rank}>{String(rank).padStart(2, "0")}</span>
        <span className={styles.title}>{events.title}</span>
        <Badge tone="neutral">{events.category}</Badge>
        <span className={styles.score}>
          Importance {events.importance_score} / 100
        </span>
        <span className={styles.arrow} aria-hidden="true">
          ↘
        </span>
      </span>
      {/* Phase 2 flips .expanded and aria-expanded to reveal this paragraph. */}
      <span className={styles.detail}>{events.what_happened}</span>
    </button>
  );
}
