import styles from "./Badge.module.css";

/** A static label (category, status). Not a chip: M3 chips are actions; this isn't. */
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
