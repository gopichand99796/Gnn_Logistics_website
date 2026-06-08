'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './global-journey-layer.module.css';

export default function GlobalJourneyLayer() {
  const { scrollYProgress } = useScroll();
  const routeLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const vehiclePosition = useTransform(scrollYProgress, [0, 0.2, 0.48, 0.78, 1], ['10%', '28%', '50%', '72%', '92%']);
  const shipOpacity = useTransform(scrollYProgress, [0, 0.26], [1, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0.18, 0.5, 0.74], [0, 1, 0]);
  const truckOpacity = useTransform(scrollYProgress, [0.6, 0.88, 1], [0, 1, 1]);

  return (
    <div className={styles.overlay} aria-hidden="true">
      <svg className={styles.routeSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M50 7 C50 16 50 25 50 32 C50 40 54 42 58 48 C62 54 44 60 44 66 C44 72 52 74 52 80 C52 86 48 88 46 92"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: routeLength }}
          className={styles.routePath}
        />
      </svg>

      <div className={styles.nodes}>
        <span className={`${styles.node} ${styles.nodeA}`} />
        <span className={`${styles.node} ${styles.nodeB}`} />
        <span className={`${styles.node} ${styles.nodeC}`} />
        <span className={`${styles.node} ${styles.nodeD}`} />
      </div>

      <motion.div className={styles.vehicle} style={{ top: vehiclePosition }}>
        <motion.div className={styles.ship} style={{ opacity: shipOpacity }} />
        <motion.div className={styles.container} style={{ opacity: containerOpacity }} />
        <motion.div className={styles.truck} style={{ opacity: truckOpacity }} />
      </motion.div>
    </div>
  );
}
