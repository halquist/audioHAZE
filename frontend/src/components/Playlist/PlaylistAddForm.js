import './Playlist.css'

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistForm from './PlaylistForm';

import * as playlistActions from '../../store/playlist'

const PlaylistAddForm = ({ songId, trigger, hideTrigger }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session?.user?.id);
  const playlists = useSelector((state) => state.playlist);

  const [playlist, setPlaylist] = useState('');
  const [playlistIdForm, setPlaylistIdForm] = useState('default');
  const [errors, setErrors] = useState([]);
  const [playlistArr, setPlaylistArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [dummyState, setDummyState] = useState(null);

  useEffect(() => {
    dispatch(playlistActions.getPlaylists(userId))
      .then((res) => {
        setPlaylistArr(res)
      })
      .then((res) => {
        setLoaded(true)
      })
  },[])

  // useEffect(() => {
  //   dispatch(playlistActions.getPlaylists(userId))
  //     .then((res) => {
  //       setPlaylistArr(res)
  //     })
  //     .then((res) => {
  //       setLoaded(true)
  //     })
  // }, [trigger])

  // console.log(playlistId)

  // console.log(showCreate)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    // console.log('user', userId, 'playlist', playlistId, 'song', songId)
    if (e.target.value === 'create') {
      setShowCreate(true)
    } else {
      const playlistId = parseInt(e.target.value, 10)
      let updatePlaylist = await dispatch(playlistActions.addToPlaylist(userId, playlistId, songId))
        .catch(async (res) => {
          // console.log('errors', res)
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        })
        if (updatePlaylist) {
          hideTrigger(updatePlaylist.title)
          // console.log('success')
        }
    }
  }

  if (!loaded) {
    return (
      null
    )
  }

  return (
    <div className='playlistFormContainer'>
      {!showCreate &&
        <form className='playlistAddToForm' onSubmit={handleSubmit}>
          {errors.length > 0 && <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>}
            {/* <div className='customSelect'> */}
              <select
                className='playlistSelect'
                name='playlist'
                type="text"
                value={playlistIdForm}
                onChange={(e) => handleSubmit(e)}
                required
              >
                <option value='default' disabled={true}>Pick Playlist</option>
                <option value='create'>+Create New Playlist</option>
                {playlistArr.map(playlist => (
                    <option key={playlist.id} value={playlist.id}>
                      {playlist.title}
                    </option>
                ))}
              </select>
            {/* </div> */}
            {/* {playlistIdForm !== 'default' ? */}
            {/* <button type='submit'>Select Playlist</button>  */}
            {/* <button type='submit' disabled>Add To Playlist</button> */}
            {/* } */}
        </form>
      }
      {showCreate &&
        <div className='createListBlade'>
          <PlaylistForm trigger={trigger} showTrigger={setDummyState}/>
        </div>
      }
    </div>
  )
}

export default PlaylistAddForm
