import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOneSong } from '../../store/song';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './RadioPlayer.css';
import { PlaylistDisplay } from '../Playlist';

const RadioPlayer = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song.currentSong);


  useEffect(()=> {
    if(song) {
      dispatch(getOneSong(song.id));
    }
  }, []);

  // let songLink = song?.url;

  // converts google drive links to work with audio player
  // if (song && song.url.startsWith('https://drive.google.com')) {
  //   songLink = 'https://drive.google.com/uc?export=download&id=' + song.url.split('/')[5];
  // }

  let songData;
  if (song) {
    songData = (
      <>
        <NavLink exact to={`/songs/${song.id}`} className='songTitle truncate'>{song.title}</NavLink>
        <div className='songArtist truncate'>{song.User.username}</div>
      </>
    );
  }

  const fillerData = (
    <>
      <div className='songTitle'>audioHAZE</div>
      <div className='songArtist'>radio</div>
    </>
  );


  return (
      <div id='audioPlayerWrapper'>
        <PlaylistDisplay />
        <div className='songDetails'>
          {song && songData}
          {!song && fillerData}
        </div>
      <AudioPlayer
        autoPlay
        src={song?.url}
        // onPlay={e => console.log("onPlay")}
        // other props here
      />
      </div>
  )
}

export default RadioPlayer;
