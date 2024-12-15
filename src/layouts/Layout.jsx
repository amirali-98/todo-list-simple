import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>Todo App</h1>
        <span className={styles.userInfo}>Amirali Mansouri</span>
      </header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <p>Developed By Amirali with ❤️</p>
      </footer>
    </div>
  );
}

export default Layout;
