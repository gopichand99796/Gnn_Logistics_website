'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import styles from './scale-section.module.css';
import scaleImage from '../../../assets/freight truck highway.jpg';

function AnimatedNumber({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    motionValue.set(value);
    const unsubscribe = spring.on('change', (latest) => {
      setCurrent(Math.round(latest));
    });
    return () => unsubscribe();
  }, [motionValue, spring, value]);

  return (
    <div className={styles.animatedNumber}>
      <span className={styles.value}>{current.toLocaleString()}{suffix}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function ScaleSection() {
  const { scrollYProgress } = useScroll();
  const routeFill = useTransform(scrollYProgress, [0.42, 0.72], ['0%', '100%']);
  const truckPosition = useTransform(scrollYProgress, [0.42, 0.72], ['-18%', '102%']);
  const driverGlow = useTransform(scrollYProgress, [0.45, 0.7], [0.08, 0.72]);
  const volumeScale = useTransform(scrollYProgress, [0.48, 0.75], [0.82, 1.05]);

  return (
    <section className={styles.scale} id="scale">
      <div className={styles.intro}>
        <span className={styles.chapter}>CHAPTER 4: SCALE OF THE OPERATION</span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.title}
        >
          The shipment moves deeper, and GNN’s operation becomes larger, faster, and more capable.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className={styles.description}
        >
          The route fills with moving assets, crew activation, and a logistics network built to handle every next mile.
        </motion.p>
      </div>

      <div className={styles.grid}>
        <motion.div
          className={styles.scene}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className={styles.sceneFrame}>
            <Image
              src={scaleImage}
              alt="Freight truck moving along a highway at dusk"
              fill
              sizes="100vw"
              className={styles.sceneImage}
              priority={false}
            />
            <div className={styles.sceneOverlay} />
            <motion.div
              className={styles.routeLine}
              style={{ width: routeFill }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <motion.div
              className={styles.truckAsset}
              style={{ x: truckPosition }}
              transition={{ ease: 'easeInOut', duration: 0.9 }}
            />
            <motion.div
              className={styles.activityCircle}
              style={{ opacity: driverGlow }}
              animate={{ scale: [0.86, 1.04, 0.86] }}
              transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
        </motion.div>

        <div className={styles.metrics}>
          <motion.div
            className={styles.metricBlock}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className={styles.metricBadge}>Operational reach</div>
            <AnimatedNumber value={1420} suffix="+" label="Freight loads coordinated" />
            <p className={styles.metricText}>
              Cargo moves through an expanding network of routes, terminals, and cargo teams working in sync.
            </p>
          </motion.div>

          <motion.div
            className={styles.metricBlock}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className={styles.metricBadge}>Driver activation</div>
            <AnimatedNumber value={820} suffix="+" label="Transport specialists engaged" />
            <p className={styles.metricText}>
              A fleet of drivers and handlers deploy in real time as the shipment crosses each milestone.
            </p>
          </motion.div>

          <motion.div
            className={styles.metricBlock}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className={styles.metricBadge}>Reliability</div>
            <AnimatedNumber value={998} suffix="‰" label="On-time delivery confidence" />
            <p className={styles.metricText}>
              Each vehicle and route step is monitored, keeping the shipment on schedule across the network.
            </p>
          </motion.div>

          <motion.div
            className={styles.metricBlock}
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            style={{ transformOrigin: 'left center', scale: volumeScale }}
          >
            <div className={styles.metricBadge}>Capacity</div>
            <AnimatedNumber value={380} suffix="+" label="Transportation assets active" />
            <p className={styles.metricText}>
              The operation scales fluidly, adding assets as cargo volume grows and destinations multiply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
