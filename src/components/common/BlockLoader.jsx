import styles from "./BlockLoader.module.css";

export const BlockLoader = () => {
  return (
    <div className={styles.loadcontainer}>
      <div className={styles.loadingspinner}>
        <div id={styles.square1}></div>
        <div id={styles.square2}></div>
        <div id={styles.square3}></div>
        <div id={styles.square4}></div>
        <div id={styles.square5}></div>
      </div>
    </div>
  );
};
