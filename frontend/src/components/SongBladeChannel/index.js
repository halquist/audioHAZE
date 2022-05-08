import { useSelector, useDispatch } from 'react-redux';
import SongBlade from '../SongBlade';

import './SongBladeChannel.css';

// front page display for a category of songs

const SongBladeChannel = ({ title, themeList, isLoaded, sessionUserId }) => {
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
