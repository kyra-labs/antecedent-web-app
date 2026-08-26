import styles from "./EntityStats.module.css";

export function EntityStats() {
  return (
    <dl className={styles.stats}>
      <div><dt>Mentions</dt><dd>42</dd></div>
      <div><dt>First seen</dt><dd>Jan 2023</dd></div>
      <div><dt>Last mentioned</dt><dd>2 days ago</dd></div>
    </dl>
  );
}
