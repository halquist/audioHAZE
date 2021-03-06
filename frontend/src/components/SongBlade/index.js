import { NavLink, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSongs } from '../../store/song';

import PlayButton from '../PlayButton';
import HeartForm from '../HeartForm';
import { PlaylistPlus } from '../Playlist';

import './SongBlade.css';

const SongBlade = ({song, sessionUserId, trigger}) => {
  // console.log('songblade pass', songPass)
  // const song = useSelector(state => state.song[songPass.id]);
  // const songs = useSelector(state => state.song);
  const [image, setImage] = useState(song.imageUrl)
  // const [songUrl, setSongUrl] = useState(song.url)
  // const [hearted, setHearted] = useState(false);


  const dispatch = useDispatch();

  // converts google drive links to work for direct access
  // let imageLink = '';
  // if (song && song.imageUrl.startsWith('https://drive.google.com')) {
  //   imageLink = 'https://drive.google.com/uc?export=download&id=' + song.imageUrl.split('/')[5];
  // }


  return (
    <div className='songBlade'>
      <div className='bladeContent'>
        <div className='imagePlay' style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          {/* <div className='spacerDiv'></div> */}
          <div className='mainPlayButtonDiv'>
            <PlayButton target={song.id}/>
          </div>
            <div className='heartContainerPush'>
              <PlaylistPlus songId={song.id} />
              <div className='heartContainerFront'>
                <HeartForm target={song} sessionUserId={sessionUserId} trigger={trigger} />
              </div>
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
