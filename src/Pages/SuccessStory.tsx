import { SucessStory as SuccessComponent } from '../Components';
import { motion } from 'framer-motion';

export const SuccessStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SuccessComponent />
    </motion.div>
  );
};
