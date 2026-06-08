'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import fleetImage from '../../../assets/cargo logistics port.jpg';
import styles from './fleet-section.module.css';

const fleetCards = [
  {
    title: 'Port fleet coordination',
    detail: 'Ships, cranes, trucks and terminal handlers move as one integrated fleet when the cargo arrives.',
  },
  {
    title: 'Lane-ready coverage',
    detail: 'Every route is supported by dedicated vessels and drayage teams that follow the shipment forward.',
  },
  {
    title: 'Yard capacity',
    detail: 'High-density yards, container stacks, and ready terminals keep the load moving without delay.',
  },
];

export default function FleetSection() {
  return (
    <section className={styles.fleet} id="fleet">
      <div className={styles.background}>
        <Image
          src={fleetImage}
          alt="Port operations with ships, containers, and cranes"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority={false}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Chapter 5: Fleet</span>
          <h2 className={styles.title}>
            Every vessel, truck and yard asset is part of the fleet moving your shipment forward.
          </h2>
          <p className={styles.description}>
            When Container GNN-7749 reaches the port, our fleet takes over immediately—guiding it through
            terminal operations, loading docks, and onward transport with precise coordination.
          </p>
        </div>

        <div className={styles.cards}>
          {fleetCards.map((card) => (
            <motion.article
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className={styles.cardTag}>Fleet</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
