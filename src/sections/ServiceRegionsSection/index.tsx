'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import regionsImage from '../../../assets/global freight network.jpg';
import styles from './service-regions-section.module.css';

const regions = [
  {
    title: 'Asia-Pacific',
    description: 'Strategic port gateways and inland routes across the busiest ocean corridor.',
  },
  {
    title: 'Europe',
    description: 'Seamless transshipment across major hubs and cross-border road networks.',
  },
  {
    title: 'Americas',
    description: 'Reliable land and coastal coverage for final mile delivery across key markets.',
  },
];

export default function ServiceRegionsSection() {
  return (
    <section className={styles.regions} id="regions">
      <div className={styles.background}>
        <Image
          src={regionsImage}
          alt="A global logistics network representing regional coverage zones"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority={false}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Chapter 7: Service Regions</span>
        <h2 className={styles.title}>
          The route expands across continents, connecting our network to your final destination.
        </h2>
        <p className={styles.subtitle}>
          GNN supports cargo movement through connected regional zones with a single operational command.
        </p>

        <div className={styles.regionGrid}>
          {regions.map((region) => (
            <motion.article
              key={region.title}
              className={styles.regionCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.78, ease: 'easeOut' }}
            >
              <div className={styles.regionMarker} aria-hidden="true" />
              <h3 className={styles.regionTitle}>{region.title}</h3>
              <p className={styles.regionText}>{region.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
