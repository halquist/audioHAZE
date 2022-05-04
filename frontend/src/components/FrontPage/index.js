import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import PlayButton from '../PlayButton';
import SongBlade from '../SongBlade';

import './FrontPage.css';

const FrontPage = ({isLoaded}) => {
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
          {isLoaded &&
          songList.map((song) => {
              return (
                <SongBlade songPass={song} key={song.title} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
