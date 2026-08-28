import styles from "./DigestList.module.css";
import { DateFilter } from "./DateFilter";
import { SearchBar } from "./SearchBar";
import { DigestListItem } from "./DigestListItem";

export function DigestList() {
  return (
    <section className={`container pageReveal ${styles.archive}`}>
      <header className={styles.heading}>
        <div>
          <p className={styles.kicker}>Reading archive</p>
          <h1>Archive</h1>
        </div>
        <p>Previous editions, kept close to the dates and stories that shaped them.</p>
      </header>

      <div className={styles.controls}>
        <SearchBar />
        <DateFilter />
      </div>

      <div className={styles.list}>
        <DigestListItem title="Kimwolf fallout and a Kotlin release" date="Aug 26, 2026" readingTime="12 min read" href="/digest/kimwolf-kotlin" />
        <DigestListItem title="The quiet return of local-first software" date="Aug 25, 2026" readingTime="9 min read" href="/digest/local-first" />
        <DigestListItem title="Why model evaluation moved into the build pipeline" date="Aug 24, 2026" readingTime="14 min read" href="/digest/model-evaluation" />
        <DigestListItem title="A new layer for browser-native agents" date="Aug 22, 2026" readingTime="8 min read" href="/digest/browser-agents" />
        <DigestListItem title="The standards work behind smaller AI hardware" date="Aug 20, 2026" readingTime="11 min read" href="/digest/ai-hardware" />
      </div>
    </section>
  );
}
