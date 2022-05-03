import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOneSong } from '../../store/song';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './RadioPlayer.css';

const RadioPlayer = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song.currentSong);

  console.log('song', song)

  useEffect(()=> {
    if(song) {
      dispatch(getOneSong(song.id));
    }
  }, []);

  let songLink = '';

  // converts google drive links to work with audio player
  if (song && song.url.startsWith('https://drive.google.com')) {
    songLink = 'https://drive.google.com/uc?export=download&id=' + song.url.split('/')[5];
  }

  console.log(song)

  return (
      <div id='audioPlayerWrapper'>
        <div className='songDetails'>
          {song &&
          <>
            <NavLink exact to={`/songs/${song.id}`} className='songTitle'>{song.title}</NavLink>
            <div className='songArtist'>{song.User.username}</div>
          </>
          }
        </div>
      <AudioPlayer
        autoPlay
        src={songLink}
        onPlay={e => console.log("onPlay")}
        // other props here
      />
      </div>
  )
}

export default RadioPlayer;
