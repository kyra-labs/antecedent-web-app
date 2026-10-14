import styles from "./State.module.css";
import { Button, Card, Icon } from "@kyralabs/m3e-react";

/**
 * Page-level, the state is its own pane. `bare`: inside a page that already has a pane (the
 * archive), it is a card in that pane.
 */
export function EmptyState({ bare = false }) {
  const body = (
    <>
      <span className={`${styles.icon} ${styles.empty}`} aria-hidden="true">
        <Icon name="inbox" />
      </span>
      <div>
        <h2>Nothing here yet</h2>
        <p>Stories will appear here when a digest is published.</p>
      </div>
      <Button variant="tonal" href="/archive">
        Browse the archive
      </Button>
    </>
  );

  if (bare) {
    return (
      <Card as="section" variant="filled" className={`${styles.state} ${styles.card}`}>
        {body}
      </Card>
    );
  }

  return (
    <div className="container">
      <section className={`pane pageReveal ${styles.state}`}>{body}</section>
    </div>
  );
}
