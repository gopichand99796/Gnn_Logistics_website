'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import teamImage from '../../../assets/logistics team.jpg';
import styles from './testimonials-section.module.css';

const testimonials = [
  {
    quote: 'GNN kept our shipment on schedule even when the ocean route shifted. Their visibility and communication were exceptional.',
    name: 'Sofia Chen',
    role: 'Operations Director, Sable Imports',
  },
  {
    quote: 'The final-mile handoff was seamless. We knew the cargo was secure from the port to our warehouse.',
    name: 'Mateo Alvarez',
    role: 'Supply Chain Manager, Nova Retail',
  },
  {
    quote: 'Their logistics team aligned every leg of the route and kept us updated like clockwork.',
    name: 'Amira Hassan',
    role: 'Logistics Lead, Meridian Foods',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.background}>
        <Image
          src={teamImage}
          alt="Logistics team discussing shipping operations"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Chapter 8: Testimonials</span>
        <h2 className={styles.title}>
          Customers describe the final delivery moments that make the journey real.
        </h2>
        <p className={styles.subtitle}>
          The team behind Container GNN-7749 delivers on promises, not just routes.
        </p>

        <div className={styles.cards}>
          {testimonials.map((item, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.78, ease: 'easeOut', delay: index * 0.08 }}
            >
              <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
              <p className={styles.author}>{item.name}</p>
              <p className={styles.authorRole}>{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
