import { motion } from 'framer-motion';

// Apparition douce au scroll. Avec <MotionConfig reducedMotion="user"> (App.js),
// le déplacement est désactivé si l'utilisateur préfère moins d'animations.
const Reveal = ({ children, delay = 0, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
