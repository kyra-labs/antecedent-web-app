import styles from "./DigestDetail.module.css";
import { DigestHeader } from "./DigestHeader";
import { MustKnowSection } from "./MustKnowSection";
import { AlsoKnowSection } from "./AlsoKnowSection";

export function DigestDetail({ digest }) {
  return (
    <article className={`container pageReveal ${styles.detail}`}>
      <DigestHeader
        title={digest.title}
        readingTime={digest.readingTime}
        introduction={digest.introduction}
        edition={digest.edition}
      />
      <MustKnowSection stories={digest.mustKnow} />
      <AlsoKnowSection stories={digest.alsoKnow} />
    </article>
  );
}
