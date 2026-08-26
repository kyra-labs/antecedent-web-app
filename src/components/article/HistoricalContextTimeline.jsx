import styles from "./HistoricalContextTimeline.module.css";

export function HistoricalContextTimeline() {
  return (
    <section className={styles.timeline} aria-labelledby="context-heading">
      <header className={styles.heading}>
        <h2 id="context-heading">How we got here</h2>
        <p>Three earlier releases shaped today’s announcement.</p>
      </header>

      <ol className={styles.thread}>
        <li className={styles.node}>
          <time dateTime="2019">2019</time>
          <div><h3>GPT-2 was released</h3><p>OpenAI showed that a larger language model could produce coherent long-form text.</p></div>
        </li>
        <li className={styles.node}>
          <time dateTime="2022">2022</time>
          <div><h3>ChatGPT reached the public</h3><p>A conversational interface turned language models into a product used outside research teams.</p></div>
        </li>
        <li className={styles.node}>
          <time dateTime="2024">2024</time>
          <div><h3>GPT-4o unified model inputs</h3><p>Text, image, and audio interactions moved into one faster model family.</p></div>
        </li>
      </ol>
    </section>
  );
}
