import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import PlayButton from '../PlayButton';

import './FrontPage.css';

const FrontPage = () => {
  const dispatch = useDispatch();

  // loads all songs in the store into a song list
  const songList = useSelector(state =>{
    return state.song.songList.map(song => song)
  });


  // useEffect(() => {
  //   dispatch(getSongs());
  // },[dispatch]);


  if (!songList) {
    return null;
  }

  return (
    <div className='mainFrontPageContent'>
      <div id='outerFrontPageContainer'>
        <div className='displayTitle'>Latest Songs</div>
        <div id='innerFrontPageContainer'>
          {songList.map((song) => {
              return (
                <div className='songBlade'>
                    <div>
                      <div className='imagePlay'>
                        <div className='mainPlayButtonDiv'>
                          <PlayButton target={song.id}/>
                        </div>
                        <img src={`${song.imageUrl}`} className='songArt'></img>
                      </div>
                      <NavLink key={song.title} to={`/songs/${song.id}`}>
                        <div className="primary-text">{song.title}</div>
                        <div className="secondary-text">{song.User.username}</div>
                      </NavLink>
                    </div>
                  </div>
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
    </div>
  );
}

export default FrontPage;
