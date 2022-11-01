import { motion } from 'framer-motion';

export const Testimonial = ({
  title,
  desc,
  img,
  className,
  subtitle
}: {
  title: string;
  desc: string;
  img: string;
  className: string;
  subtitle?: string;
}) => {
  return (
    <motion.div
      initial={{ y: '-400px', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className={className}
    >
      <div className='row'>
        <div className='col'>
          <img className='tesimonial__img' src={img} alt='' />
        </div>
        <div className='col'>
          <span className='subtitle'>{subtitle && subtitle}</span>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};
