import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import PlayButton from '../PlayButton';
import EditSongForm from '../EditSongForm';
import DeleteSong from '../EditSongForm/DeleteSong';
import CommentForm from '../CommentForm';
import LoginFormModalButton from '../LoginFormModal';
import CommentDisplay from '../CommentDisplay';
import HeartForm from '../HeartForm';

import { getComments } from "../../store/comment";
import { getOneSong } from '../../store/song';
import { getHearts } from '../../store/heart';

import './SongDetail.css';

const SongDetail = (isLoaded) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  // const hearts = song.Hearts;
  // const heartsList = hearts.heartList;

  const [currentSong, setCurrentSong] = useState(song);
  const [hearted, setHearted] = useState(false);
  const [loaded, setLoaded] = useState(false);


  let sessionUserId = null;
  if (sessionUser) {
    sessionUserId = sessionUser.id
  }


  useEffect(()=> {
    dispatch(getOneSong(songId))
      .then((ret) => {
        setCurrentSong(ret)
      })
      .then(() => {
        dispatch(getComments(songId));
      })
      .then(() => {
        setLoaded(true)
      })
    }, [dispatch, songId, hearted]);

    useEffect(() => {

    },[currentSong])


    console.log(currentSong)


    // for (let i = 0; i < heartsList.length; i++) {
    //   if (heartsList[i].userId === sessionUserId) {
    //     hearted = true;
    //     thisHeart = heartsList[i]
    //     break;
    //   }
    //   hearted = false;
    // }

  if (!currentSong) {
    return null;
  }

  // converts image link to work with google drive hosting
  let imageLink = '';
  if (song && song.imageUrl.startsWith('https://drive.google.com')) {
    imageLink = 'https://drive.google.com/uc?export=download&id=' + song.imageUrl.split('/')[5];
  }

  if (!loaded) {
    return (
        <div>Loading</div>
    )
  };

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>
        <div className='imagePlay' style={{
            backgroundImage: `url(${imageLink})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}></div>
          <div id='heartedContainer'>
            <HeartForm target={currentSong} sessionUserId={sessionUserId} trigger ={setHearted}/>
          </div>
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
        { sessionUserId === song.userId && currentSong &&
        <div id='editDeleteDiv'>
          <EditSongForm currentSong={currentSong} />
          <DeleteSong currentSong={currentSong} />
        </div>
        }
        {sessionUser ?
        <CommentForm currentSong={currentSong}/> :
        <LoginFormModalButton displayText='Leave Comment' warning='Please Log In to Leave a Comment' passId='commentLoginButton'/>
        }
        <CommentDisplay />
      </div>
    </div>
  )

}

export default SongDetail;
