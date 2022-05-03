import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';

import { getOneSong } from '../../store/song';

import './SongDetail.css';
import 'react-h5-audio-player/lib/styles.css';

const SongDetail = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);

  useEffect(()=> {
    dispatch(getOneSong(songId));
  }, [songId]);

  if (!song) {
    return null;
  }

  console.log('url', song.url);

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>{song.title}</div>
      <AudioPlayer
    autoPlay
    src={song.url}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
    </div>
  )

}

export default SongDetail;
