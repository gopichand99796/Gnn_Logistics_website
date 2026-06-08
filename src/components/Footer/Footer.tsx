import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.brand}>GNN Logistics</div>
          <p className={styles.copy}>
            Your cargo. Our commitment. From port arrival to the final doorstep, we make every
            movement count.
          </p>
        </div>

        <div className={styles.links}>
          <a href="#hero" className={styles.link}>
            Home
          </a>
          <a href="#services" className={styles.link}>
            Services
          </a>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
