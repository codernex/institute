import { AiFillCode, AiOutlineAntDesign } from 'react-icons/ai';
import { GrAnnounce, GrThreeDEffects } from 'react-icons/gr';
import { SiFsecure } from 'react-icons/si';
import { MdPermMedia } from 'react-icons/md';

const courseData: ICourse[] = [
  {
    name: 'ওয়েব এন্ড সফটওয়্যার',
    icon: <AiFillCode />,
    description: 'ওয়েব এন্ড সফটওয়্যার'
  },
  {
    name: 'ডিজিটাল মার্কেটিং',
    icon: <GrAnnounce />,
    description: 'ডিজিটাল মার্কেটিং'
  },
  {
    name: 'ডিজাইন এন্ড মাল্টিমিডিয়া',
    icon: <AiOutlineAntDesign />,
    description: 'ডিজাইন এন্ড মাল্টিমিডিয়া'
  },
  {
    name: '2D অ্যানিমেশন এন্ড ভিজ্যুয়ালাইজেশন',
    icon: <GrThreeDEffects />,
    description: '2D অ্যানিমেশন এন্ড ভিজ্যুয়ালাইজেশন'
  },
  {
    name: 'সাইবার সিকিউরিটি',
    icon: <SiFsecure />,
    description: '2D অ্যানিমেশন এন্ড ভিজ্যুয়ালাইজেশন'
  },
  {
    name: 'ফিল্ম এন্ড মিডিয়া',
    icon: <MdPermMedia />,
    description: 'ফিল্ম এন্ড মিডিয়া'
  }
];

export default courseData;
