import styles from "./State.module.css";
import { Button, Card, Icon } from "@kyralabs/m3e-react";

/**
 * Page-level, the state is its own pane. `bare`: inside a page that already has a pane (the
 * archive), it is a card in that pane.
 */
export function ErrorState({ onRetry, bare = false }) {
  const body = (
    <>
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
    </>
  );

  if (bare) {
    return (
      <Card
        as="section"
        variant="filled"
        className={`${styles.state} ${styles.card}`}
        role="alert"
      >
        {body}
      </Card>
    );
  }

  return (
    <div className="container">
      <section className={`pane pageReveal ${styles.state}`} role="alert">
        {body}
      </section>
    </div>
  );
}
