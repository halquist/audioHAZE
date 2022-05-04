import { NavLink, Route, useParams } from 'react-router-dom';
import PlayButton from '../PlayButton';

import './SongBlade.css';

const SongBlade = ({songPass}) => {
  // const { song } = songPass;

  // converts google drive links to work for direct access
  let imageLink = '';
  if (songPass && songPass.imageUrl.startsWith('https://drive.google.com')) {
    imageLink = 'https://drive.google.com/uc?export=download&id=' + songPass.imageUrl.split('/')[5];
  }

  if (!songPass) {
    return null;
  }

  return (
    <div className='songBlade'>
      <div>
        <div className='imagePlay' style={{
          backgroundImage: `url(${imageLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='mainPlayButtonDiv'>
            <PlayButton target={songPass.id}/>
          </div>
          {/* <img src={`${song.imageUrl}`} className='songArt'></img> */}
        </div>
        <NavLink to={`/songs/${songPass.id}`}>
          <div className="primary-text truncate">{songPass.title}</div>
          <div className="secondary-text truncate">{songPass.User.username}</div>
        </NavLink>
      </div>
  </div>
  )
}

export default SongBlade;
