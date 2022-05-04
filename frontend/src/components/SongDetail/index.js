import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import PlayButton from '../PlayButton';
import EditSongForm from '../EditSongForm';
import DeleteSong from '../EditSongForm/DeleteSong';

import { getOneSong } from '../../store/song';

import './SongDetail.css';

const SongDetail = (isLoaded) => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  const [currentSong, setCurrentSong] = useState(song);

  useEffect(()=> {
    dispatch(getOneSong(songId));
  }, [dispatch, songId]);


  if (!song) {
    return null;
  }

  // converts image link to work with google drive hosting
  let imageLink = '';
  if (song && song.imageUrl.startsWith('https://drive.google.com')) {
    imageLink = 'https://drive.google.com/uc?export=download&id=' + song.imageUrl.split('/')[5];
  }

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>
      <div className='imagePlay' style={{
          backgroundImage: `url(${imageLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div id='titleArtistPlay'>
          <PlayButton target={currentSong.id}/>
          <div id='titleArtist'>
            {isLoaded &&
            <>
              <div id='songTitle'>{currentSong.title}</div>
              {currentSong.User &&
                <div id='songArtist'>{currentSong.User.username}</div>
              }
            </>
            }
          </div>
        </div>
        <EditSongForm currentSong={currentSong} />
        <DeleteSong currentSong={currentSong}/>
      </div>
    </div>
  )

}

export default SongDetail;
