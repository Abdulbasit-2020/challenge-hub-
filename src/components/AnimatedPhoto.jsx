import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedPhoto({ src, alt, caption, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.figure
      className={`animated-photo ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .97 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
      animate={reduceMotion ? {} : { y: [0, -8, 0] }}
      transition={{ opacity: { duration: .55 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, scale: { duration: .55 } }}
      viewport={{ once: true, amount: .2 }}
    >
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className="photo-caption">{caption}</figcaption>}
    </motion.figure>
  );
}