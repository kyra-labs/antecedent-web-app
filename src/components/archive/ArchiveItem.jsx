import styles from "./ArchiveItem.module.css";

export function ArchiveItem({ title = "OpenAI adds controls for long-running agent tasks", date = "Aug 26, 2026", href = "/article/openai-agent-controls" }) {
  return (
    <article className={styles.item}>
      <a className={styles.link} href={href}>
        <h2>{title}</h2>
        <time>{date}</time>
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
