import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loadContent}>
      <span className={styles.loader}></span>
    </div>
  );
};
