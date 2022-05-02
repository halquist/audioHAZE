import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getOneSong } from '../../store/song';

import './SongDetail.css';

const SongDetail = () => {
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);

  useEffect(()=> {
    dispatchEvent(getOneSong(songId));
  }, [songId]);


}

export default SongDetail;
