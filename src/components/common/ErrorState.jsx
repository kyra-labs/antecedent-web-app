import styles from "./ErrorState.module.css";

export function ErrorState({ onRetry }) {
  return (
    <section className={styles.state} role="alert">
      <span className={styles.icon} aria-hidden="true">
        ×
      </span>
      <div>
        <h2>Couldn’t load this content</h2>
        <p>The request did not finish. Check the connection and try again.</p>
      </div>
      {onRetry && (
        <button
          className={styles.button}
          onClick={() => onRetry()}
          type="button"
        >
          Retry
        </button>
      )}
    </section>
  );
}
