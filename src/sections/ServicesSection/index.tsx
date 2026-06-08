'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import styles from './services-section.module.css';
import portImage from '../../../assets/global logistics network.jpg';

const details: Record<string, string> = {
  'ocean-freight': 'Ocean freight routes remain the backbone of cross-border cargo transport, moving loaded containers across major seaports with consistent scheduling and secure handling.',
  'intermodal-logistics': 'Intermodal logistics connects sea, rail, and road, ensuring cargo moves smoothly between different transport systems without losing momentum.',
  'container-drayage': 'Drayage services keep cargo moving between the port gate and inland terminals, preventing bottlenecks and supporting the next stage of transit.',
  'full-truckload': 'Full truckload shipments deliver containerized freight directly to the next terminal or final destination with dedicated capacity and strict timeline control.',
  'supply-chain-solutions': 'Supply chain solutions organize end-to-end cargo flow, giving visibility, asset coordination, and proactive adjustments throughout the journey.',
};

const nodePositions = [12, 28, 44, 60, 76];

export default function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Chapter 3: The Network</span>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          GNN moves cargo from port through a connected transportation network.
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          Containers are no longer just unloaded—they are routed, lifted, and carried deeper into GNN’s logistics ecosystem until they are ready for the final mile.
        </motion.p>
      </div>

      <div className={styles.journey}>
        <motion.div
          className={styles.photoBackdrop}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <Image
            src={portImage}
            alt="A global logistics network connecting port gateways and transport lanes"
            fill
            sizes="100vw"
            className={styles.photoImage}
            priority={false}
          />
          <div className={styles.photoLabel}>Global logistics network</div>
        </motion.div>

        <div className={styles.serviceColumn}>
          {services
            .filter((_, index) => index % 2 === 0)
            .map((service, index) => (
              <motion.article
                key={service.id}
                className={`${styles.containerCard} ${styles.left}`}
                initial={{ opacity: 0, x: -22, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.14 }}
              >
                <div className={styles.connector} />
                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>Cargo</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardText}>{service.description}</p>
                <div className={styles.cardDetail}>
                  <strong>Service detail</strong>
                  <p>{details[service.id]}</p>
                </div>
              </motion.article>
            ))}
        </div>

        <div className={styles.routeColumn}>
          <div className={styles.routeTrack}>
            <motion.div
              className={styles.routeFill}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.05, ease: 'easeOut', delay: 0.2 }}
            />
            <motion.span
              className={styles.cargoPulse}
              initial={{ y: 0 }}
              animate={{ y: [0, 620, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            {nodePositions.map((position, index) => (
              <span
                key={index}
                className={styles.routeNode}
                style={{ top: `${position}%` }}
              />
            ))}
          </div>
        </div>

        <div className={styles.serviceColumn}>
          {services
            .filter((_, index) => index % 2 === 1)
            .map((service, index) => (
              <motion.article
                key={service.id}
                className={`${styles.containerCard} ${styles.right}`}
                initial={{ opacity: 0, x: 22, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.14 + 0.1 }}
              >
                <div className={styles.connector} />
                <div className={styles.cardHeader}>
                  <span className={styles.cardBadge}>Cargo</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardText}>{service.description}</p>
                <div className={styles.cardDetail}>
                  <strong>Service detail</strong>
                  <p>{details[service.id]}</p>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
