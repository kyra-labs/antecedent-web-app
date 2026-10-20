import styles from "./DigestListItem.module.css";
import { Card, CardAction, Icon } from "@kyralabs/m3e-react";

/** One past edition: an interactive card whose title link covers the whole card. */
export function DigestListItem({ id, title, date, readingTime }) {
  return (
    <Card as="li" className={styles.item}>
      <Icon name="subdirectory_arrow_right" className={styles.index} />
      <h2 className={styles.title}>
        <CardAction href={`/archive/${id}`}>{title}</CardAction>
      </h2>
      <time className={styles.date}>{date}</time>
      <span className={styles.readingTime}>{readingTime}</span>
      <Icon name="arrow_outward" className={styles.arrow} />
    </Card>
  );
}
