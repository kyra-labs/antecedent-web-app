import styles from "./AlsoKnowCard.module.css";
import { useId, useState } from "react";
import { Card, Icon } from "@kyralabs/m3e-react";
import { Badge } from "../common/Badge";

/**
 * A short signal: the row is a disclosure button that reveals what happened. (Before, the
 * button carried aria-expanded="false" but never expanded; this is the "Phase 2" its comment
 * described.)
 */
export function AlsoKnowCard({ rank, events }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailId = useId();

  return (
    <Card variant="filled" className={styles.card}>
      <button
        className={`m3e-state-layer m3e-focus-ring ${styles.row}`}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailId}
        onClick={() => setIsExpanded((value) => !value)}
      >
        <span className={styles.rank}>{String(rank).padStart(2, "0")}</span>
        <span className={styles.title}>{events.title}</span>
        <span className={styles.meta}>
          <Badge tone="neutral">{events.category}</Badge>
          <span className={styles.score}>
            Importance {events.importance_score} / 100
          </span>
        </span>
        <Icon name="expand_more" className={styles.arrow} />
      </button>
      <p id={detailId} className={styles.detail} hidden={!isExpanded}>
        {events.what_happened}
      </p>
    </Card>
  );
}
