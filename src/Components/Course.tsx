import './course.scss';
import { motion } from 'framer-motion';

interface CourseMap {
  title: string;
  data: ICourseData[];
}
const Course: React.FC<CourseMap> = ({ title, data }) => {
  return (
    <motion.div
      initial={{ y: '-400px', opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 400 }}
      className='course'
    >
      <h2 className='title'>{title}</h2>
      <div className='course__body'>
        {data.map((item, i) => {
          return (
            <div key={i} className='course__item'>
              <img src={item.imgUrl} alt='' />

              <div className='course__content'>
                <span>{item.tag[1]}</span>
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Course;
