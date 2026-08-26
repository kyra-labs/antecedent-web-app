import styles from "./ArchiveList.module.css";
import { SearchBar } from "./SearchBar";
import { DateFilter } from "./DateFilter";
import { ArchiveItem } from "./ArchiveItem";
import { Pagination } from "../common/Pagination";

export function ArchiveList() {
  return (
    <section className={`container pageReveal ${styles.archive}`}>
      <header className={styles.heading}>
        <h1>Archive</h1>
        <p>Past digests, arranged by publication date and ready to search.</p>
      </header>

      <div className={styles.controls}>
        <SearchBar />
        <DateFilter />
      </div>

      <div className={styles.list}>
        <ArchiveItem title="OpenAI adds controls for long-running agent tasks" date="Aug 26, 2026" />
        <ArchiveItem title="RISC-V laptops move closer to everyday development" date="Aug 26, 2026" href="/article/risc-v-laptops" />
        <ArchiveItem title="Local-first database startup raises a new seed round" date="Aug 25, 2026" href="/article/local-first-funding" />
        <ArchiveItem title="The browser gains a standard API for local AI models" date="Aug 24, 2026" href="/article/browser-local-models" />
        <ArchiveItem title="A new chip packaging method cuts data-center power use" date="Aug 22, 2026" href="/article/chip-packaging-power" />
      </div>

      <Pagination />
    </section>
  );
}
