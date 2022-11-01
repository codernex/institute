import ReactPlayer from 'react-player/facebook';
import successData from '../success';
import { motion } from 'framer-motion';

export const SucessStory = () => {
  return (
    <motion.div
      initial={{ y: '300px', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className='success__story container p-5'
    >
      <div className='section__title'>
        <h2>সফলতার গল্প</h2>
        <p>
          আমাদের শিক্ষার্থীদের সফলতার প্রতিটি গল্প বর্ণ আইটি ইন্সটিটিউটের এগিয়ে
          চলায় উদ্দীপনা যোগায় প্রতিটি মুহূর্তে।
        </p>
      </div>
      <div className='wrapper'>
        {successData.map((item, i) => {
          return <ReactPlayer key={i} url={item.url} />;
        })}
      </div>
    </motion.div>
  );
};
