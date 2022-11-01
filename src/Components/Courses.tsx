import Tab from './Tab/Tab';

export const Courses = () => {
  return (
    <div className='courses p-5'>
      <div className='section__title'>
        <h2>জনপ্রিয় কোর্সসমূহ</h2>
        <p>
          দেশ ও দেশের বাইরে বর্তমানে যে স্কিলগুলোর চাহিদা সবচেয়ে বেশি, সেসব
          দিয়েই সাজানো হয়েছে আমাদের কোর্স লিস্ট। এখান থেকে আপনার সুবিধামত অফলাইন
          কোর্সে এনরোল করতে পারবেন যেকোনো সময়।
        </p>
      </div>
      <Tab />
    </div>
  );
};
