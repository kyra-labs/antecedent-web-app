import styles from "./EntityTag.module.css";

export function EntityTag({ name = "OpenAI", href = "/entity/openai" }) {
  return <a className={styles.tag} href={href}>{name}</a>;
}
