import styles from "./EntityHeader.module.css";

export function EntityHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.avatar} aria-hidden="true">O</span>
      <div>
        <h1>OpenAI</h1>
      </div>
    </header>
  );
}
