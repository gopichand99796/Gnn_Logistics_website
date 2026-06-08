import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image src="/assets/gnn-logo.svg" alt="GNN Logistics logo" width={40} height={40} className={styles.logo} priority />
        <div className={styles.brandText}>
          <span className={styles.brandName}>GNN Logistics</span>
          <span className={styles.brandTag}>Cargo. Command. Clarity.</span>
        </div>
      </div>
      <nav className={styles.nav} aria-label="Primary site navigation">
        <a href="#hero" className={styles.link}>
          Home
        </a>
        <a href="#about" className={styles.link}>
          About
        </a>
        <a href="#services" className={styles.link}>
          Services
        </a>
        <a href="#fleet" className={styles.link}>
          Fleet
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}
