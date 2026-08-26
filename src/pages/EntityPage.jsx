import { Layout } from "../components/layout/Layout";
import { EntityHeader } from "../components/entity/EntityHeader";
import { EntityStats } from "../components/entity/EntityStats";
import { MentionsTimeline } from "../components/entity/MentionsTimeline";
import { StoryCard } from "../components/digest/StoryCard";
import styles from "./Pages.module.css";

export function EntityPage() {
  return (
    <Layout>
      <div className={`container pageReveal ${styles.entityPage}`}>
        <EntityHeader />
        <EntityStats />
        <MentionsTimeline />
        <section className={styles.related} aria-labelledby="related-stories">
          <h2 id="related-stories">Related stories</h2>
          <StoryCard title="OpenAI adds controls for long-running agent tasks" blurb="The release focuses on checkpoints, progress reporting, and recovery when a tool call fails." />
          <StoryCard title="Model context windows grow, but memory remains difficult" blurb="Longer prompts solve only part of the problem when an assistant must keep durable context." time="3 days ago" href="/article/model-memory" tone="neutral" />
        </section>
      </div>
    </Layout>
  );
}
