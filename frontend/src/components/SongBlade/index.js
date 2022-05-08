import { NavLink, Route, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PlayButton from '../PlayButton';
import HeartForm from '../HeartForm';

import './SongBlade.css';

const SongBlade = ({songPass, sessionUserId}) => {

  const song = useSelector(state => state.song[songPass.id]);

  // converts google drive links to work for direct access
  let imageLink = '';
  if (song && song.imageUrl.startsWith('https://drive.google.com')) {
    imageLink = 'https://drive.google.com/uc?export=download&id=' + song.imageUrl.split('/')[5];
  }

  if (!song) {
    return null;
  }

  return (
    <div className='songBlade'>
      <div className='bladeContent'>
        <div className='imagePlay' style={{
          backgroundImage: `url(${imageLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='mainPlayButtonDiv'>
            <PlayButton target={song.id}/>
          </div>
            <div className='heartContainerFront'>
              <HeartForm target={song.id} sessionUserId={sessionUserId}/>
            </div>
        </div>
        <NavLink to={`/songs/${song.id}`}>
          <div className="primary-text truncate">{song.title}</div>
          <div className="secondary-text truncate">{song.User.username}</div>
        </NavLink>
      </div>
  </div>
  )
}

export default SongBlade;
