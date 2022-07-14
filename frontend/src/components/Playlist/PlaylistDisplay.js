import './Playlist.css'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as playlistActions from '../../store/playlist'

import play from '../../images/play.svg'

const PlaylistDisplay = () => {
  const dispatch = useDispatch();

  const playlist = useSelector(state => state.playlist);
  const userId = useSelector((state) => state.session.user?.id);

  const [showPlaylistId, setShowPlaylistId] = useState('');
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

  const showPlaylistIdFunc = () => {
    if (!showPlaylistId) {
      setShowPlaylistId('showPlayList')
    } else {
      setShowPlaylistId('')
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
    <div className='playlistDisplayContainer' onClick={() => showPlaylistIdFunc}>
      <div className='playlistDisplayText'>Playlist</div>
      <img className='playlistPlayIcon' src={play} height='10'></img>
      <div className='playlistMenu'>
        {playlistArr.map((playlist) => {
          return (
            <div className='playlistMenuIcon' id={showPlaylistId}>
              {/* {playlist.title} */}
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default PlaylistDisplay
