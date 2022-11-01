import { motion } from 'framer-motion';

export const Freelancing = () => {
  return (
    <div className='container'>
      <h2 className='title'>Coming Soon</h2>
      <motion.div
        animate={{ rotate: 360 }}
        className='coming__soon circle'
      ></motion.div>
    </div>
  );
};
