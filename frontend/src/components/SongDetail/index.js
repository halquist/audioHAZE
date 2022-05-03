import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


import { getOneSong } from '../../store/song';

import './SongDetail.css';



const SongDetail = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);

  useEffect(()=> {
    dispatch(getOneSong(songId));
  }, [songId]);

  console.log('song detail', song)

  if (!song) {
    return null;
  }

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>{song.title}</div>

    </div>
  )

}

export default SongDetail;
