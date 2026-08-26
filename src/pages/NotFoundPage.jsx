import { Layout } from "../components/layout/Layout";
import styles from "./Pages.module.css";

export function NotFoundPage() {
  return (
    <Layout>
      <section className={`container pageReveal ${styles.notFound}`}>
        <p className={styles.errorCode}>404</p>
        <h1>Page not found</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <a className={styles.homeLink} href="/">Back to home</a>
      </section>
    </Layout>
  );
}
