'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import statsImage from '../../../assets/shipping containers sunset.jpg';
import styles from './statistics-section.module.css';

const metrics = [
  { value: '98.4%', label: 'On-time performance' },
  { value: '22', label: 'Global trade lanes active' },
  { value: '14K', label: 'Containers tracked monthly' },
  { value: '60', label: 'Countries reached' },
];

export default function StatisticsSection() {
  return (
    <section className={styles.statistics} id="statistics">
      <div className={styles.background}>
        <Image
          src={statsImage}
          alt="Shipping containers at sunset in a busy terminal"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority={false}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Chapter 4: Metrics</span>
          <h2 className={styles.title}>
            The numbers tell the story of a shipment that never loses momentum.
          </h2>
          <p className={styles.subtitle}>
            GNN measures every milestone on Container GNN-7749’s journey—tracking performance, coverage, and capacity
            so the cargo arrives exactly where it needs to be.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className={styles.statValue}>{metric.value}</span>
              <p className={styles.statLabel}>{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.callout}>
          GNN’s global operations are built to scale in real time. From port arrival to land transfer, the shipment remains visible,
          measured, and managed at every step.
        </div>
      </div>
    </section>
  );
}
