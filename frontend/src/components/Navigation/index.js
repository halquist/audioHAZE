import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModalButton from '../LoginFormModal';
import Icon from '../Icon/Icon';
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
      <NavLink exact to="/" className='iconLink'>
        <Icon />
      </NavLink>
      <div className='navButtons'>
        <NavLink exact to="/" className='homeText'>Home</NavLink>
        {
          sessionUser ? <NavLink exact to="/newSong" className='homeText'>Upload</NavLink> :
          <LoginFormModalButton displayText='Upload' warning='Please Log In to Upload a Song' />
        }
        <NavLink exact to="/pyramid" className='homeText'><PyramidLogo /></NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
