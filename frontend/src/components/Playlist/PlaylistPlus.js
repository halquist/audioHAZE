import './Playlist.css'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as playlistActions from '../../store/playlist'
import PlaylistAddForm from './PlaylistAddForm';

const PlaylistPlus = () => {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  }

  return (
    <div className='playlistPlusContainer'>
      <div className='playlistPlus'
      onClick={handleClick}
      >
        {!showMenu ? '+' : '-' }
      </div>
      {!showMenu ?
      <span className='toolTipText'>Add to playlist</span> :
      <div className='addToPlaylistContainer'>
        <PlaylistAddForm />
      </div>
      }
    </div>
  )
}

export default PlaylistPlus
