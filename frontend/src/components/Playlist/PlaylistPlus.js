import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as playlistActions from '../../store/playlist'
import PlaylistAddForm from './PlaylistAddForm'

const PlaylistPlus = ({ songId }) => {

  const sessionUser = useSelector(state => state.session.user);


  const [showMenu, setShowMenu] = useState(false)
  const [success, setSuccess] = useState(false)
  const [createSuccess, setCreateSuccess] = useState(false)
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

  const handleCreate = (title) => {
    setTitle(title)
    setCreateSuccess(true)
    const successTimeout = setTimeout(() => {
      setCreateSuccess(false)
      setTitle('')
      setShowMenu(false)
      clearTimeout(successTimeout)
    }, 3000)
  }

  if (!sessionUser) {
    return <div></div>
  }

  return (
    <div className='playlistPlusContainer'>
      <div className='playlistPlus'
      onClick={handleClick}
      >
        {showMenu ?
        <div className='playlistPlusX'>+</div> :
        <div className='playlistPlusNormal'>+</div>
        }
      </div>
      {!showMenu && !success && !createSuccess &&
      <span className='toolTipText'>Add to playlist</span>
      }
      {showMenu && !success && !createSuccess &&
      <div className='addToPlaylistContainer'>
        <PlaylistAddForm hideTrigger={handleAdd} trigger={handleCreate} songId={songId} />
      </div>
      }
      {success &&
      <div className='successMessage'>
        <div className='successMessageText'>
          Song added to {title}
        </div>
      </div>
      }
      {createSuccess &&
        <div className='successMessage'>
          <div className='successMessageText'>
            Playlist {title} Created
          </div>
        </div>
      }
    </div>
  )
}

export default PlaylistPlus
