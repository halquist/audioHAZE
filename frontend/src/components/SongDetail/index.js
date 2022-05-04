import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PlayButton from '../PlayButton';
import { getOneSong } from '../../store/song';

import './SongDetail.css';

const SongDetail = (isLoaded) => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  const [currentSong, setCurrentSong] = useState(song);

  useEffect(()=> {
    dispatch(getOneSong(songId));
    // setCurrentSong(song);
  }, []);


  if (!song) {
    return null;
  }

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>
        <div id='titleArtistPlay'>
          <PlayButton target={currentSong.id}/>
          <div id='titleArtist'>
            {isLoaded &&
            <>
              <div id='songTitle'>{currentSong.title}</div>
              <div id='songArtist'>{currentSong.User.username}</div>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )

}

export default SongDetail;
