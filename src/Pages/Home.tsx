import { CourseCarousel, Courses, Hero, SucessStory } from '../Components';
import Course from '../Components/Course';
import { Testimonial } from '../Components/Testimonial';
import data from '../data';
import gdImg from '../assets/GD-1.jpg';
import webImg from '../assets/web-1.jpg';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='home container'
    >
      <Hero />
      <CourseCarousel />
      <Courses />
      <SucessStory />
      <section className='course__group'>
        <div className='section__title'>
          <h2>সকল কোর্সে ভর্তি চলছে</h2>
          <p>অফলাইন যেকোনো কোর্সে আপনার সুবিধামতো সময়ে ভর্তি হতে পারেন এখনই।</p>
        </div>
        <Course
          title='ডিজাইন এন্ড মাল্টিমিডিয়া '
          data={data.filter(item =>
            item.tag.includes('ডিজাইন এন্ড মাল্টিমিডিয়া')
          )}
        />
        <Course
          title='ওয়েব এন্ড সফটওয়্যার '
          data={data.filter(item => item.tag.includes('ওয়েব এন্ড সফটওয়্যার'))}
        />
        <Course
          title='ডিজিটাল মার্কেটিং '
          data={data.filter(item => item.tag.includes('ডিজিটাল মার্কেটিং'))}
        />
      </section>
      <Testimonial
        title='প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে শিক্ষাদান আমাদের বিশেষত্ব'
        desc='প্র্যাকটিক্যাল প্রোজেক্ট ছাড়া যেকোনো শিক্ষা অপূর্ণ। এক জরিপে দেখা গেছে, কেবল হাতে-কলমে শিক্ষার অভাবে চাকরি জীবনে ভোগান্তির শিকার হন ৬৭ শতাংশ মানুষ। তাছাড়া মার্কেটপ্লেস বা লোকাল জবে একটি পোর্টফোলিও না থাকলে কাজ পেতেও অনেক সময় লাগে। সব ক্যারিয়ারের শুরুতে কম-বেশি সবাই এই সমস্যায় ভোগেন। তাই ক্রিয়েটিভ আইটি বিশ্বাস করে হাতে-কলমে শিক্ষার উপর। এজন্যই আমাদের প্রতিটি কোর্সে রাখা হয়েছে পর্যাপ্ত সংখ্যক প্রজেক্ট। আপনি যদি আমাদের দক্ষ মেন্টরের তত্ত্বাবধানে সবগুলো প্রজেক্ট শেষ করেন, তাহলে কোর্স চলাকালীন সময়েই নিজের একটি ভালো পোর্টফোলিও তৈরি করতে পারবেন।'
        className='web testimonial p-5'
        img={webImg}
      />
      <Testimonial
        title='আইটি এক্সপার্ট তৈরির
জগতে বিশ্বস্ত প্রতিষ্ঠান'
        desc='আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে নিজেকে আপডেটেড রাখতে আপনার পাশে রয়েছে বর্ণ  আইটি ইন্সটিটিউট। আইটি সেক্টর হোক বা নন-আইটি সেক্টর, সবখানেই এখন আইটি এক্সপার্টদের ভালো চাহিদা রয়েছে। এজন্যই আপডেটেড কারিকুলাম, অভিজ্ঞ মেন্টর আর আধুনিক ল্যাব নিয়ে দীর্ঘ ৫ বছর যাবত আমরা তৈরি করে চলেছি আইটি এক্সপার্ট। এর ধারাবাহিকতায় আমরা পেয়েছি ৫ হাজারেরও বেশি সফল মুখ, যারা নিজেরা স্বাবলম্বী হয়ে কর্মসংস্থান তৈরি করেছেন আরও মানুষের। আর এই শিক্ষার্থীদের সাফল্য আমাদের পথচলার অনুপ্রেরণা। আমরা বিশ্বাস করি প্রতিটি মানুষই প্রতিভাবান, আর আপনার প্রতিভা বিকাশের দায়িত্ব আমাদের। প্রয়োজন কেবল আপনার আগ্রহ এবং নিয়মিত অনুশীলনের।'
        className='graphics testimonial p-5'
        subtitle='সাফল্যের ৫ বছরের'
        img={gdImg}
      />
    </motion.div>
  );
};
