import styles from "./State.module.css";
import { Button, Card, Icon } from "@kyralabs/m3e-react";

/** `bare`: inside a page that already has the page column (the archive). */
export function EmptyState({ bare = false }) {
  return (
    <div className={bare ? undefined : "container"}>
      <Card as="section" variant="filled" className={styles.state}>
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
      </Card>
    </div>
  );
}
