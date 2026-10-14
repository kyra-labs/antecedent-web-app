import styles from "./Pages.module.css";
import { Button } from "@kyralabs/m3e-react";

export function NotFoundPage() {
  return (
    <div className="container">
      <section className={`pane pageReveal ${styles.notFound}`}>
        <p className={styles.errorCode}>404</p>
        <h1>Page not found</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <Button variant="filled" href="/">
          Back to home
        </Button>
      </section>
    </div>
  );
}
