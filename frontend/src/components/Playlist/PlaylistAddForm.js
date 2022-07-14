import './Playlist.css'

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as playlistActions from '../../store/playlist'

const PlaylistAddForm = ({ songId, trigger }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const playlists = useSelector((state) => state.playlist);

  const [playlist, setPlaylist] = useState('');
  const [playlistIdForm, setPlaylistIdForm] = useState('default');
  const [errors, setErrors] = useState([]);
  const [playlistArr, setPlaylistArr] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(playlistActions.getPlaylists(userId))
      .then((res) => {
        setPlaylistArr(res)
      })
      .then((res) => {
        setLoaded(true)
      })
  },[])

  useEffect(() => {
     console.log('running')
    dispatch(playlistActions.getPlaylists(userId))
      .then((res) => {
        setPlaylistArr(res)
      })
      .then((res) => {
        setLoaded(true)
      })
  }, [trigger])

  // console.log(playlistId)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    // console.log('user', userId, 'playlist', playlistId, 'song', songId)
    const playlistId = parseInt(playlistIdForm, 10);
    let updatePlaylist = await dispatch(playlistActions.addToPlaylist(userId, playlistId , songId))
      .catch(async (res) => {
        console.log('errors', res)
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
      if (updatePlaylist) {
        console.log('success')
      }
  }

  if (!loaded) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div className='playlistFormContainer'>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
          Playlist
        </label>
          <select
            className='playlistSelect'
            name='playlist'
            type="text"
            value={playlistIdForm}
            onChange={(e) => {
              setPlaylistIdForm(e.target.value)
            }}
            required
          >
            <option value='default' disabled={true}>Pick Playlist</option>
            {playlistArr.map(playlist => (
                <option key={playlist.id} value={playlist.id}>
                  {playlist.title}
                </option>
            ))}
          </select>
          {playlistIdForm !== 'default' ?
          <button type='submit'>Add To Playlist</button> :
          <button type='submit' disabled>Add To Playlist</button>
          }
      </form>
    </div>
  )
}

export default PlaylistAddForm
