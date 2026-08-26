import styles from "./ArticleDetail.module.css";
import { EntityTag } from "./EntityTag";
import { HistoricalContextTimeline } from "./HistoricalContextTimeline";
import { SourceLink } from "./SourceLink";

export function ArticleDetail() {
  return (
    <article className={`container pageReveal ${styles.article}`}>
      <header className={styles.header}>
        <a className={styles.backLink} href="/">← Today’s digest</a>
        <h1>OpenAI adds controls for long-running agent tasks</h1>
        <p className={styles.byline}>TechCrunch · August 26, 2026 · 7 min read</p>
      </header>

      <div className={styles.body}>
        <p>OpenAI has introduced new controls for software agents that work across longer tasks. The release focuses on checkpoints, clearer progress reporting, and recovery when a tool call fails.</p>
        <p>The change matters because agent systems often perform many connected actions. A small failure near the end can otherwise force the whole task to restart, making the result slow and difficult to trust.</p>
        <p>The new interface keeps a record of completed steps and gives developers more control over where execution resumes. It also makes each external tool call easier to inspect before the next step begins.</p>
        <p>This is less dramatic than a new model launch, but it addresses a practical limit: reliable software depends on predictable recovery, not only stronger model output.</p>
      </div>

      <div className={styles.entities} aria-label="Entities mentioned">
        <EntityTag name="OpenAI" href="/entity/openai" />
        <EntityTag name="ChatGPT" href="/entity/chatgpt" />
        <EntityTag name="GPT-4o" href="/entity/gpt-4o" />
      </div>

      <HistoricalContextTimeline />
      <SourceLink />
    </article>
  );
}
