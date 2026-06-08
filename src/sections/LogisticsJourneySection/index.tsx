'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import journeyImage from '../../../assets/shipping routes map.jpg';
import styles from './logistics-journey-section.module.css';

const journeySteps = [
  {
    label: 'Origin',
    title: 'Port loading',
    description: 'The container is loaded and sealed, then tracked as it clears the harbor and enters the route network.',
  },
  {
    label: 'Crossing',
    title: 'Ocean passage',
    description: 'GNN monitors the vessel and adapts to weather, pace, and schedule on the open water.',
  },
  {
    label: 'Landfall',
    title: 'Port handoff',
    description: 'The shipment arrives at the destination port and transitions into terminal operations for the next leg.',
  },
  {
    label: 'Final Mile',
    title: 'Truck dispatch',
    description: 'A dedicated truck picks up the container and carries it into regional delivery routes.',
  },
  {
    label: 'Delivery',
    title: 'Doorstep arrival',
    description: 'The cargo is delivered, the journey completes, and the next shipment begins to move.',
  },
];

export default function LogisticsJourneySection() {
  return (
    <section className={styles.journey} id="journey">
      <div className={styles.background}>
        <Image
          src={journeyImage}
          alt="A logistics route map showing global cargo movement"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority={false}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Chapter 6: Logistics Journey</span>
        <h2 className={styles.title}>
          The full process unfolds as the container flows through each checkpoint.
        </h2>
        <p className={styles.subtitle}>
          This chapter shows the route, the handoffs, and the phases that carry the cargo from sea to street.
        </p>

        <div className={styles.timeline}>
          <div className={styles.steps}>
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.label}
                className={styles.stepCard}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.08 }}
              >
                <div className={styles.stepLabel}>{index + 1}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </motion.article>
            ))}
          </div>

          <div className={styles.mapPanel}>
            <div className={styles.mapOverlay} aria-hidden="true">
              <div className={styles.routeLine} />
              <span className={`${styles.stepMarker}`} style={{ top: '16%', left: '18%' }} />
              <span className={`${styles.stepMarker}`} style={{ top: '34%', left: '44%' }} />
              <span className={`${styles.stepMarker}`} style={{ top: '54%', left: '24%' }} />
              <span className={`${styles.stepMarker}`} style={{ top: '70%', left: '62%' }} />
              <span className={`${styles.stepMarker}`} style={{ top: '82%', left: '36%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
