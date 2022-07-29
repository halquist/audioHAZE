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
import PlaylistContainer from '../Playlist';

import { getComments } from "../../store/comment";
import { getOneSong, getSongs } from '../../store/song';
import { PlaylistPlus } from '../Playlist';


import './SongDetail.css';

const SongDetail = ({ isLoaded, setUploading, uploading, display, setType }) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song[songId]);
  // const hearts = song.Hearts;
  // const heartsList = hearts.heartList;

  const [currentSong, setCurrentSong] = useState(song);
  const [hearted, setHearted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [image, setImage] = useState(song?.imageUrl)

  const [trigger, setTrigger] = useState(false);



  let sessionUserId = null;
  if (sessionUser) {
    sessionUserId = sessionUser.id
  }


  useEffect(()=> {
    dispatch(getSongs())
    dispatch(getOneSong(songId))
      .then((ret) => {
        setCurrentSong(ret)
        setImage(ret.imageUrl)
      })
      .then(() => {
        dispatch(getComments(songId));
      })
      .then(() => {
        setLoaded(true)
      })
    }, []);

  useEffect(()=> {
    dispatch(getOneSong(songId))
      .then((ret) => {
        setCurrentSong(ret)
        setImage(ret.imageUrl)
      })
      .then(() => {
        dispatch(getComments(songId));
      })
      .then(() => {
        setLoaded(true)
      })
    }, [dispatch, songId, hearted, rerender]);

    useEffect(() => {

    },[currentSong])

    useEffect(() => {
      dispatch(getOneSong(songId))
      .then((ret) => {
        setCurrentSong(ret)
        setImage(ret.imageUrl)
      })
      .then(() => {
        setLoaded(true)
      })
    }, [hearted])


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
  // let imageLink = song.imageUrl;
  // if (song && song.imageUrl.startsWith('https://drive.google.com')) {
  //   imageLink = 'https://drive.google.com/uc?export=download&id=' + song.imageUrl.split('/')[5];
  // }

  if (!loaded) {
    return (
        <div>Loading</div>
    )
  };

  return (
    <div id='mainSongDetailContent'>
      <div id='songDetailBlade'>
      <div className='imagePlay' style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className='spacerDiv'></div>
          {/* <div className='mainPlayButtonDiv'>
            <PlayButton target={song.id}/>
          </div> */}
            <div className='heartContainerPush'>
              <PlaylistPlus songId={song.id} />
              <div className='heartContainerFront'>
              <HeartForm target={currentSong} sessionUserId={sessionUserId} trigger ={setHearted}/>
              </div>
            </div>
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
        <>
          <div id='editDeleteDiv'>
            <button onClick={() => {
              setShowEditForm(!showEditForm)
              setShowDeleteForm(false)
              }} id='editSongButton'>Edit Song</button>
            <button onClick={() => {
              setShowDeleteForm(!showDeleteForm)
              setShowEditForm(false)
              }} id='deleteSongButton'>Delete Song</button>
          </div>
            {showEditForm &&
            <EditSongForm currentSong={currentSong} trigger={setShowEditForm} rerender={setRerender} setUploading={setUploading} uploading={uploading} display={display} setType={setType} />
            }
            {showDeleteForm &&
            <DeleteSong currentSong={currentSong} trigger={setShowDeleteForm}/>
            }
        </>
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
