import './Playlist.css'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as playlistActions from '../../store/playlist'

const PlaylistForm = ({ trigger, showTrigger, reloadTrigger }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session?.user?.id);


  const [title, setTitle] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setErrors([])
    let newPlaylist = await dispatch(playlistActions.createPlaylist(userId, title))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
      if (newPlaylist) {
        trigger(title)
        setTitle('')
        // setTrigger((prev) => !prev)
        showTrigger('showPlaylist')
        reloadTrigger(false)
      }
  }

  const preventClose = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className='playlistFormContainer2'
      onClick={(e) => preventClose(e)}
    >
      <form className='playlistCreateForm' onSubmit={handleSubmit}>
          {errors.length > 0 &&
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          }
          <label>
            Playlist Title
          </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setTitle(e.target.value)
              }}
              required
            />
            <button type='submit'
              onClick={handleSubmit}
            >
              Create Playlist
            </button>
        </form>
    </div>
  )
}

export default PlaylistForm
