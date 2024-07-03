import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.spanContent}>
        Number of Tasks Done:{completedTodos}
      </span>
      <span className={styles.spanContent}>Total Tasks:{totalTodos}</span>
    </div>
  );
}
