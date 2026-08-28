import styles from "./DigestDetail.module.css";
import { DigestHeader } from "./DigestHeader";
import { MustKnowSection } from "./MustKnowSection";
import { AlsoKnowSection } from "./AlsoKnowSection";

export function DigestDetail({ digest }) {
  const mustKnownStories = digest.digest_items.filter(
    (item) => item.section === "must_know",
  );

  const alsoKnownStories = digest.digest_items.filter(
    (item) => item.section === "also",
  );

  return (
    <article className={`container pageReveal ${styles.detail}`}>
      <DigestHeader
        title={digest.title}
        readingTime={`${digest.reading_minutes} minutes`}
        introduction={digest.introduction}
        edition={new Date(digest.digest_date).toLocaleDateString("en-us", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
      <MustKnowSection stories={mustKnownStories} />
      <AlsoKnowSection stories={alsoKnownStories} />
    </article>
  );
}
