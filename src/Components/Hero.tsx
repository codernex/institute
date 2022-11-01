import { AiOutlinePlayCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import './hero.scss';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className='hero p-5'>
      <div className='row'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transitionDuration: '0.5s' }}
          className='col'
        >
          <h5>
            <AiOutlineCheckCircle />
            দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে
          </h5>
          <h2>ক্যারিয়ার শুরু হোক</h2>
          <h1>দক্ষতার আত্মবিশ্বাসে</h1>
          <p>
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে বর্ণ আইটি ইনস্টিটিউট
            প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি
            ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
          </p>
          <div className='btn__group'>
            <Link className='btn__global' to={'/courses'}>
              ব্রাউজ কোর্স
            </Link>
            <Link className='btn__global' to='/seminar'>
              জয়েন ফ্রি সেমিনার
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            visibility: 'hidden',
            scale: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            visibility: 'visible',
            transitionDuration: '0.3s',
            animation: 'ease-in-out'
          }}
          className='col'
        >
          <ReactPlayer
            style={{
              borderRadius: 10
            }}
            url={'https://www.youtube.com/embed/COC1Li1Kz_E'}
            playIcon={<AiOutlinePlayCircle />}
            controls
          />
        </motion.div>
      </div>
    </section>
  );
};
