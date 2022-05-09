import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SongBlade from '../SongBlade';
import { getSongs } from '../../store/song';


import './SongBladeChannel.css';

// front page display for a category of songs

const SongBladeChannel = ({ title, themeList, isLoaded, sessionUserId }) => {
  const dispatch = useDispatch();

  // const songs = useSelector(state => state.song);

  useEffect(() => {
    if (!themeList.length) {
      dispatch(getSongs());
    }
  }, [])


  return (
      <div className='outerFrontPageContainer'>
        <div className='displayTitle'>{title}</div>
        <div className='innerFrontPageContainer'>
          {isLoaded &&
          themeList.map((song) => {
              return (
                <SongBlade songPass={song} sessionUserId={sessionUserId} key={song.title} />
              );
            })
          }
        </div>
      </div>
  )
}

export default SongBladeChannel;
