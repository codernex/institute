import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='container p-5'
      style={{ textAlign: 'center' }}
    >
      <h2>404 | Not Found</h2>
      <p>
        Please Go Back To <Link to='/'>Home</Link>
      </p>
    </motion.div>
  );
};
