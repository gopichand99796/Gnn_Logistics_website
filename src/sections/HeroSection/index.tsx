'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import heroImage from '../../../assets/port cranes containers.jpg';
import styles from './hero-section.module.css';

const particleIds = [1, 2, 3, 4, 5, 6];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fallback = window.setTimeout(() => setLoaded(true), 1500);
    return () => window.clearTimeout(fallback);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.background}>
        <motion.div
          className={styles.parallaxLayer}
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <Image
          src={heroImage}
          alt="Port cranes loading a container onto a ship at dawn"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority
          onLoadingComplete={() => setLoaded(true)}
        />
        <div className={styles.overlay} />
        <div className={styles.glow} />

        <div className={styles.routeOverlay} aria-hidden="true">
          <svg className={styles.routeLines} viewBox="0 0 1200 700" preserveAspectRatio="none">
            <path d="M 72 198 C 240 82 388 240 560 166 S 860 345 1128 190" />
            <path d="M 68 476 C 246 376 438 536 620 464 S 896 640 1112 520" />
          </svg>
          <span className={styles.routePoint} style={{ top: '18%', left: '14%' }} />
          <span className={styles.routePoint} style={{ top: '27%', left: '40%' }} />
          <span className={styles.routePoint} style={{ top: '13%', left: '66%' }} />
          <span className={styles.routePoint} style={{ top: '28%', left: '86%' }} />
        </div>

        <motion.div
          className={styles.ship}
          animate={{ x: [0, 18, -14, 0], y: [0, -10, 0, 6], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <div className={styles.particles} aria-hidden="true">
          {particleIds.map((id) => (
            <span key={id} className={`${styles.particle} ${styles[`particle${id}`]}`} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {!loaded && (
          <motion.div
            className={styles.loadingOverlay}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className={styles.loaderRing} />
            <p className={styles.loaderText}>Tracking route data...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.content}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: 'easeOut', delay: 0.2 }}
        >
         
          <h1 className={styles.heroHeading}>From Port to Doorstep..</h1>
          <p className={styles.heroText}>
            Precision logistics across every ocean and every mile. Follow the journey of Container
            GNN-7749 from port departure to final delivery.
          </p>
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.35 }}
          >
            <a href="#contact" className={styles.ctaPrimary}>
              Get a Quote
            </a>
            <a href="#about" className={styles.ctaSecondary}>
              Track Shipment
            </a>
          </motion.div>
          <div className={styles.scrollHint}>
            <span className={styles.arrow} aria-hidden="true" />
            <span>Scroll to begin the journey</span>
          </div>
          <div className={styles.scrollTracker} aria-hidden="true">
            <span className={styles.trackerLabel}>Shipment tracker</span>
            <span className={styles.trackerLine}>
              <span className={styles.trackerMarker} />
            </span>
            <span className={styles.trackerStatus}>Live route</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
