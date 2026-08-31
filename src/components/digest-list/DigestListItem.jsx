import styles from "./DigestListItem.module.css";
import { Link } from "react-router";

export function DigestListItem({ id, title, date, readingTime }) {
  return (
    <Link className={styles.item} to={`${id}`} key={id}>
      <span className={styles.index} aria-hidden="true">
        ↳
      </span>
      <span className={styles.title}>{title}</span>
      <time className={styles.date}>{date}</time>
      <span className={styles.readingTime}>{readingTime}</span>
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
