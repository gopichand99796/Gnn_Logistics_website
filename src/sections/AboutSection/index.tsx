'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutImage from '../../../assets/container ship aerial.jpg';
import styles from './about-section.module.css';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.routeConnector} aria-hidden="true">
        <span className={styles.routeLabel}>Continued route</span>
        <div className={styles.routeTrack} />
        <span className={styles.routeStop}>Ocean</span>
      </div>

      <div className={styles.aboutGrid}>
        <motion.div
          className={styles.copyPanel}
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.sectionEyebrow}>Chapter 2: The Crossing</span>
          <h2 className={styles.heading}>
            The ship leaves the port and Container GNN-7749 begins its ocean crossing.
          </h2>
          <p className={styles.description}>
            As the vessel clears the harbor, GNN keeps the shipment visible, coordinating crew, route data, and the next handoff at sea.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>24/7</span>
              <p>Vessel tracking coverage</p>
            </div>
            <div className={styles.stat}>
              <span>18</span>
              <p>Global trade lanes monitored</p>
            </div>
            <div className={styles.stat}>
              <span>99.2%</span>
              <p>Clearance and customs readiness</p>
            </div>
          </div>

          <div className={styles.storyTag}>
            <strong>The crossing is part of the story.</strong>
            <p>GNN ensures every container remains on course from the moment it departs the terminal until it reaches the next logistics handoff.</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src={aboutImage}
            alt="A container ship crosses open water during the ocean voyage"
            fill
            sizes="100vw"
            className={styles.visualImage}
          />
          <div className={styles.visualOverlay} aria-hidden="true" />
          <div className={styles.overlayTag}>
            <span>Ocean passage</span>
            <p>GNN moves the shipment through open water with precise coordination and real-time visibility.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
