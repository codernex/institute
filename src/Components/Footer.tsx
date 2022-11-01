import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './footer.scss';

export const Footer = () => {
  return (
    <React.Fragment>
      <footer className='container footer'>
        <div className='footer__content'>
          <h2>সকল কোর্সে ভর্তি চলছে</h2>
          <p>
            ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। অফলাইন <br /> যেকোনো
            কোর্সে আপনার সুবিধামতো সময়ে ভর্তি হয়ে যান এখনই।
          </p>
          <a className='free__seminar' href='#'>
            জয়েন ফ্রি সেমিনার
          </a>
        </div>
        <div className='footer__widgets'>
          <ul className='footer__widgets-about'>
            <h3 className='footer__widgets-title'>যোগাযোগ</h3>
            <li className='footer__widgets-item'>
              <div className='icon'>
                <i className='fa-solid fa-location-arrow'></i>
              </div>
              <p>
                শেখ হাসিনা সফটওয়্যার এন্ড টেকনোলোজী পার্ক, এমটি বিল্ডিং ,লেভেল
                #৮ যশোর
              </p>
            </li>
            <li className='footer__widgets-item'>
              <div className='icon'>
                <i className='fa-solid fa-phone'></i>
              </div>
              <p>
                <a href='tel:+8801958305010'>01958305010</a>
                <br />
                <a href='tel:+8801958305015'>01958305015</a>
                <br />
                <a href='tel:+8801926926926'>01926926926</a>
              </p>
            </li>
            <li className='footer__widgets-item'>
              <div className='icon'>
                <i className='fa-solid fa-envelope'></i>
              </div>
              <p>
                <a href='mailto:info@bornoit.com'>info@bornoit.com</a>
              </p>
            </li>
          </ul>
          <ul className='footer__widgets-link'>
            <h3 className='footer__widgets-title'>কুইক লিংক</h3>
            <li>
              <a href='#'>ফ্রি সেমিনারের সময়সূচি</a>
            </li>
            <li>
              <a href='#'>মেন্টরস</a>
            </li>
            <li>
              <a href='#'>সাফল্যের গল্প</a>
            </li>
            <li>
              <a href='#'>আমাদের গ্যালারী</a>
            </li>
          </ul>
          <ul className='footer__widgets-course'>
            <h3 className='footer__widgets-title'>কোর্স</h3>
            <li>
              <a href='#'>ওয়েব ডেভেলপমেন্ট</a>
            </li>
            <li>
              <a href='#'>প্রফেশনাল গ্রাফিক ডিজাইন</a>
            </li>
            <li>
              <a href='#'>ডিজিটাল মার্কেটিং</a>
            </li>
            <li>
              <a href='#'>মার্ন স্ট্যাক ডেভেলপমেন্ট</a>
            </li>
            <li>
              <a href='#'>প্রফেশনাল 3D অ্যানিমেশন</a>
            </li>
            <li>
              <a href='#'>মোশন গ্রাফিক্স</a>
            </li>
          </ul>
          <ul className='footer__widgets-other'>
            <h3 className='footer__widgets-title'>অন্যান্য</h3>
            <li>
              <a href='#'>আমাদের সম্পর্কে</a>
            </li>
            <li>
              <a href='#'>আমাদের সুবিধাদি</a>
            </li>
            <li>
              <a href='#'>আমাদের অর্জন</a>
            </li>
            <li>
              <a href='#'>ফ্রিল্যান্সিং</a>
            </li>
            <li>
              <a href='#'>স্টুডেন্ট ফিডব্যাক</a>
            </li>
          </ul>
        </div>
        <div className='footer__copyright'>
          <p>
            &copy; All Rights Reserved By{' '}
            <a href='https://bornoit.com'>BornoIT</a>
          </p>
          <div className='social'>
            <a href='https://facebook.com/bornoItinstitute'>
              <FaFacebookF />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
