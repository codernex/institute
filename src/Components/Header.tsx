import { useEffect, useState } from 'react';
import { FaBars, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';
import logo from '../assets/inst.png';
import './header.scss';

export const Header = () => {
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {}, []);

  return (
    <header className='app__header '>
      <nav className='top__bar container'>
        <span className='phone'>
          <FaPhone />
          <a href='tel:+8801958305010'>01958305010</a>
        </span>
        <span className='email'>
          <FaEnvelope />
          <a href='mailto:contact@bornoit.com'>contact@bornoit.com</a>
        </span>
      </nav>
      <nav className='app__bar container'>
        <div className='app__bar__logo'>
          <img src={logo} alt='' />
        </div>
        <ul className='appbar__lg menu'>
          <NavLink to='/'>হোম</NavLink>
          <NavLink to='/about-us'>আমাদের সম্পর্কে</NavLink>
          <NavLink to='/success-story'>সাফল্যের গল্প</NavLink>
          <NavLink to='/courses'>কোর্স</NavLink>
          <NavLink to='/contact'>যোগাযোগ</NavLink>
        </ul>

        <FaBars
          style={{ cursor: 'pointer' }}
          className='burger'
          onClick={() => setActive(true)}
        />

        <div className={`appbar__sm-container ${isActive && 'active'}`}>
          <AiOutlineClose
            style={{ color: '#fff', fontSize: 22, cursor: 'pointer' }}
            className='burger'
            onClick={() => setActive(false)}
          />
          <ul className='appbar__sm menu'>
            <NavLink onClick={() => setActive(false)} to='/'>
              হোম
            </NavLink>
            <NavLink onClick={() => setActive(false)} to='/about-us'>
              আমাদের সম্পর্কে
            </NavLink>
            <NavLink onClick={() => setActive(false)} to='/success-story'>
              সাফল্যের গল্প
            </NavLink>
            <NavLink onClick={() => setActive(false)} to='/courses'>
              কোর্সেস
            </NavLink>
            <NavLink onClick={() => setActive(false)} to='/contact'>
              যোগাযোগ
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};
