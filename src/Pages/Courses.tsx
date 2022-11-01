import Course from '../Components/Course';
import data from '../data';

export const Courses = () => {
  return (
    <div className='container'>
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
    </div>
  );
};
