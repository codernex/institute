import { useState } from 'react';
import data from '../../data';
import './tab.scss';
import { motion } from 'framer-motion';

const tabData = [
  { name: 'সকল কোর্স' },
  { name: 'ওয়েব এন্ড সফটওয়্যার' },
  { name: 'ডিজিটাল মার্কেটিং' },
  { name: 'ডিজাইন এন্ড মাল্টিমিডিয়া' },
  { name: '2D অ্যানিমেশন এন্ড ভিজ্যুয়ালাইজেশন' },
  { name: 'সাইবার সিকিউরিটি' },
  { name: 'ফিল্ম এন্ড মিডিয়া' }
];
const Tab = () => {
  const [filterKey, setFilterKey] = useState('সকল কোর্স');
  const filteredData = data.filter(item => item.tag.includes(filterKey));

  const switchTab = (item: string) => {
    setFilterKey(item);
  };

  return (
    <div className='course__tab'>
      <div className='tab__header'>
        {tabData.map((item, i) => {
          return (
            <button
              key={i}
              className={filterKey === item.name ? 'active' : ''}
              onClick={() => switchTab(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transitionDuration: '0.3s' }}
        className='tab__body'
      >
        {filteredData.map((item, i) => {
          return (
            <div key={i} className='tab__course__item'>
              <img src={item.imgUrl} alt='' />

              <div className='tab__course__content'>
                <span>{filterKey}</span>
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Tab;
