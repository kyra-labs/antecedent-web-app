import styles from "./DigestListItem.module.css";

export function DigestListItem({ title, date, readingTime, href }) {
  return (
    <a className={styles.item} href={href}>
      <span className={styles.index} aria-hidden="true">↳</span>
      <span className={styles.title}>{title}</span>
      <time className={styles.date}>{date}</time>
      <span className={styles.readingTime}>{readingTime}</span>
      <span className={styles.arrow} aria-hidden="true">↗</span>
    </a>
  );
}
