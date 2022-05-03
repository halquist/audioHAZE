import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSongs } from '../../store/song';
import { getOneSong } from '../../store/song';

import './SongDetail.css';

const SongDetail = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  const [currentSong, setCurrentSong] = useState(song);

  useEffect(()=> {
    dispatch(getOneSong(songId));
    setCurrentSong(song);
  }, []);


  if (!song) {
    return null;
  }

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>{currentSong.title}</div>
    </div>
  )

}

export default SongDetail;
