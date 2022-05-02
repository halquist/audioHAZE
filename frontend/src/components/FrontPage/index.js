import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getSongs } from '../../store/song';

import './FrontPage.css';

const FrontPage = () => {
  const dispatch = useDispatch();

  // loads all songs in the store into a song list
  const songList = useSelector(state =>{
    return state.song.songList.map(song => song)
  });


  console.log('songlist', songList);

  useEffect(() => {
    dispatch(getSongs());
  },[]);


  if (!songList) {
    return null;
  }

  return (
    <>
    <div id='outerFrontPageContainer'>
      <div className='displayTitle'>Latest Songs</div>
      <div id='innerFrontPageContainer'>
        {songList.map((song) => {
            return (
              <NavLink key={song.title} to={`/songs/${song.id}`}>
                <div className='songBlade'>
                  <div>
                    <div className="primary-text">{song.title}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
    <div id='outerFrontPageContainer'>
      <div className='displayTitle'>Latest Songs</div>
      <div id='innerFrontPageContainer'>
        {songList.map((song) => {
            return (
              <NavLink key={song.title} to={`/songs/${song.id}`}>
                <div className='songBlade'>
                  <div>
                    <div className="primary-text">{song.title}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
    <div id='outerFrontPageContainer'>
      <div className='displayTitle'>Latest Songs</div>
      <div id='innerFrontPageContainer'>
        {songList.map((song) => {
            return (
              <NavLink key={song.title} to={`/songs/${song.id}`}>
                <div className='songBlade'>
                  <div>
                    <div className="primary-text">{song.title}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
    </>
  );
}

export default FrontPage;
