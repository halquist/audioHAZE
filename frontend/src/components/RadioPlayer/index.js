import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
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

  if (song && song.url.startsWith('https://drive.google.com')) {
    songLink = 'https://drive.google.com/uc?export=download&id=' + song.url.split('/')[5];
  }

  // converts google drive links to work with audio player


  return (
      <div id='audioPlayerWrapper'>
        <div className='songDetails'>
          {song &&
           <div className='songTitle'>{song.title}</div>
          }
          <div className='songArtist'>Artist Here</div>
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
