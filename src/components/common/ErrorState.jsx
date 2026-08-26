import styles from "./ErrorState.module.css";

export function ErrorState() {
  return (
    <section className={styles.state} role="alert">
      <span className={styles.icon} aria-hidden="true">×</span>
      <div>
        <h2>Couldn’t load this content</h2>
        <p>The request did not finish. Check the connection and try again.</p>
      </div>
      <button className={styles.button} type="button">Retry</button>
    </section>
  );
}
