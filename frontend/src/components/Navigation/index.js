import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModalButton from '../LoginFormModal';
import Icon from '../Icon/Icon';
import TestLogo from '../TestLogo';
import PyramidLogo from '../Icon/PyramidLogo';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModalButton displayText='Log In'/>
        <NavLink to="/signup" className='homeText'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navBar'>
      <ul className='navContainer'>
        <li className='navContent'>
          <NavLink exact to="/" className='iconLink'>
            {/* <Icon /> */}
            <TestLogo />
          </NavLink>
          <NavLink exact to="/" className='homeText'>Home</NavLink>
          {
            sessionUser ? <NavLink exact to="/newSong" className='homeText'>Upload</NavLink> :
            <LoginFormModalButton displayText='Upload' warning='Please Log In to Upload a Song' />
          }
          <NavLink exact to="/pyramid" className='homeText'><PyramidLogo /></NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
