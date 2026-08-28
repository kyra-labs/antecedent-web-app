import styles from "./StoryCard.module.css";
import { Badge } from "../common/Badge";

export function StoryCard({
  title = "OpenAI expands its enterprise model lineup",
  blurb = "The release adds longer context windows and new controls for teams building production tools.",
  category = "AI",
  time = "2h ago",
  href = "/article/openai-enterprise-models",
  tone = "accent",
}) {
  return (
    <article className={styles.card}>
      <a className={styles.link} href={href}>
        <div className={styles.meta}>
          <Badge tone={tone}>{category}</Badge>
          <time>{time}</time>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.blurb}>{blurb}</p>
        <span className={styles.readMore} aria-hidden="true">Read story →</span>
      </a>
    </article>
  );
}
