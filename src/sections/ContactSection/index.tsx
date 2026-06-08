'use client';

import Image from 'next/image';
import styles from './contact-section.module.css';
import contactImage from '../../../assets/warehouse logistics.jpg';

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.background}>
        <Image
          src={contactImage}
          alt="Warehouse receiving dock where final delivery is prepared"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Chapter 9: Delivery</span>
        <h2 className={styles.title}>
          The shipment arrives at the warehouse and the final delivery plan is activated.
        </h2>
        <p className={styles.subtitle}>
          Start your own container’s journey with a partner that blends global reach, local execution,
          and a clear view from port to doorstep.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <form className={styles.formGroup}>
              <input className={styles.input} type="text" placeholder="Name" />
              <input className={styles.input} type="email" placeholder="Email" />
              <input className={styles.input} type="text" placeholder="Company" />
              <textarea className={styles.textarea} rows={5} placeholder="Tell us about your shipment" />
              <button type="submit" className={styles.submitButton}>
                Request shipping support
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Schedule a consultation</h3>
              <p className={styles.infoText}>Discuss origin, transit lanes, customs, and final mile options with our logistics team.</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Reach our operations desk</h3>
              <p className={styles.infoText}>contact@gnnlogistics.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Start a new route</h3>
              <p className={styles.infoText}>From port departure to doorstep delivery, we engineer the path that matches your cargo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
