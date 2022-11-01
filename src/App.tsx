import './app.scss';
import { Footer, Header } from './Components';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  AboutUs,
  ContactUs,
  Courses,
  Freelancing,
  Home,
  NotFound,
  SuccessStory
} from './Pages';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/': {
        document.title = 'Home - Borno IT Institute';
        break;
      }
      case '/about-us': {
        document.title = 'About Us - Borno IT Institute';
        break;
      }
      case '/success-story': {
        document.title = 'Success Story - Borno IT Institute';
        break;
      }
      case '/courses': {
        document.title = 'Courses - Borno IT Institute';
        break;
      }
      case '/contact': {
        document.title = 'Contact Us - Borno IT Institute';
        break;
      }
      default: {
        document.title = 'Not Found - Borno IT Institute';
        break;
      }
    }
  }, [location.pathname]);
  return (
    <div className='app'>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='success-story' element={<SuccessStory />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='freelancing' element={<Freelancing />} />
        <Route path='courses' element={<Courses />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
