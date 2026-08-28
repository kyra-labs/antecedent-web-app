import styles from "./Badge.module.css";

export function Badge({ children = "AI", tone = "accent" }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}

export function BadgeSamples() {
  return (
    <div className={styles.samples} aria-label="Badge tone samples">
      <Badge tone="accent">Featured</Badge>
      <Badge tone="category">Hardware</Badge>
      <Badge tone="neutral">Context</Badge>
      <Badge tone="danger">Correction</Badge>
    </div>
  );
}
