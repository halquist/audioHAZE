import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as playlistActions from '../../store/playlist'
import PlaylistAddForm from './PlaylistAddForm'

const PlaylistPlus = ({ songId }) => {

  const [showMenu, setShowMenu] = useState(false)
  const [success, setSuccess] = useState(false)
  const [title, setTitle] = useState('')

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev)
  }

  const handleAdd = (title) => {
    setTitle(title)
    setSuccess(true)
    const successTimeout = setTimeout(() => {
      setSuccess(false)
      setTitle('')
      setShowMenu(false)
      clearTimeout(successTimeout)
    }, 3000)
  }

  return (
    <div className='playlistPlusContainer'>
      <div className='playlistPlus'
      onClick={handleClick}
      >
        +
      </div>
      {!showMenu && !success &&
      <span className='toolTipText'>Add to playlist</span>
      }
      {showMenu && !success &&
      <div className='addToPlaylistContainer'>
        <PlaylistAddForm hideTrigger={handleAdd} songId={songId} />
      </div>
      }
      {success &&
      <div className='successMessage'>
        <div className='successMessageText'>
          Song added to {title}
        </div>
      </div>
      }
    </div>
  )
}

export default PlaylistPlus
