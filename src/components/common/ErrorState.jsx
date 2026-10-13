import styles from "./State.module.css";
import { Button, Card, Icon } from "@kyralabs/m3e-react";

/** `bare`: inside a page that already has the page column (the archive). */
export function ErrorState({ onRetry, bare = false }) {
  return (
    <div className={bare ? undefined : "container"}>
      <Card as="section" variant="filled" className={styles.state} role="alert">
        <span className={`${styles.icon} ${styles.error}`} aria-hidden="true">
          <Icon name="error" />
        </span>
        <div>
          <h2>Couldn’t load this content</h2>
          <p>The request did not finish. Check the connection and try again.</p>
        </div>
        {onRetry && (
          <Button variant="filled" onPress={() => onRetry()}>
            Retry
          </Button>
        )}
      </Card>
    </div>
  );
}
