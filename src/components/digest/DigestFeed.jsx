import styles from "./DigestFeed.module.css";
import { CategoryFilter } from "./CategoryFilter";
import { StoryCard } from "./StoryCard";

export function DigestFeed() {
  return (
    <section className={`container pageReveal ${styles.feed}`}>
      <header className={styles.heading}>
        <div>
          <p className={styles.date}>August 26, 2026</p>
          <h1>Today’s Digest</h1>
        </div>
        <p className={styles.intro}>Current technology stories, followed by the earlier events that explain why they matter.</p>
      </header>

      <CategoryFilter />

      <div className={styles.stories}>
        <StoryCard
          title="OpenAI adds controls for long-running agent tasks"
          blurb="The update gives developers clearer checkpoints and better recovery when an automated task fails midway."
          category="AI"
          time="2h ago"
        />
        <StoryCard
          title="RISC-V laptops move closer to everyday development"
          blurb="New reference hardware narrows the gap between experimental boards and machines suitable for regular software work."
          category="Hardware"
          time="4h ago"
          href="/article/risc-v-laptops"
          tone="category"
        />
        <StoryCard
          title="Local-first database startup raises a new seed round"
          blurb="The company is betting that offline collaboration and transparent sync will become standard application features."
          category="Startups"
          time="6h ago"
          href="/article/local-first-funding"
          tone="neutral"
        />
      </div>
    </section>
  );
}
