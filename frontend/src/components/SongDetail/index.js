import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import PlayButton from '../PlayButton';
import EditSongForm from '../EditSongForm';
import DeleteSong from '../EditSongForm/DeleteSong';
import CommentForm from '../CommentForm';
import LoginFormModalButton from '../LoginFormModal';


import { getOneSong } from '../../store/song';

import './SongDetail.css';

const SongDetail = (isLoaded) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  const [currentSong, setCurrentSong] = useState(song);

  let sessionUserId = null;
  if (sessionUser) {
    sessionUserId = sessionUser.id
  }


  useEffect(()=> {
    dispatch(getOneSong(songId));
    setCurrentSong(song)
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
            <PlayButton target={song.id}/>
            <div id='titleArtist'>
              {isLoaded &&
              <>
                <div id='songTitle'>{song.title}</div>
                {song.User &&
                  <div id='songArtist'>{song.User.username}</div>
                }
              </>
              }
          </div>
        </div>
        { sessionUserId === song.userId && currentSong &&
        <div id='editDeleteDiv'>
          <EditSongForm currentSong={currentSong} />
          <DeleteSong currentSong={currentSong} />
        </div>
        }
        {sessionUser ?
        <CommentForm currentSong={currentSong}/> :
        <LoginFormModalButton displayText='Leave Comment' warning='Please Log In to Leave a Comment'/>
        }

      </div>
    </div>
  )

}

export default SongDetail;
