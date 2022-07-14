import './Playlist.css'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as playlistActions from '../../store/playlist'

import play from '../../images/play.svg'

const PlaylistDisplay = ({ startPlaylist }) => {
  const dispatch = useDispatch();

  const playlist = useSelector(state => state.playlist?.currentPlaylist);
  const userId = useSelector((state) => state.session.user?.id);

  const [showPlaylistId, setShowPlaylistId] = useState('');
  const [playlistArr, setPlaylistArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');


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
    if (showPlaylistId === '') {
      setShowPlaylistId('showPlaylist')
    } else {
      setShowPlaylistId('')
    }
  }

  // const setCurrentPlaylist = async (e) => {
  //   setSelectedPlaylist(playlist.title)
  //   dispatch(playlistActions.selectCurrentPlaylist(playlist))
  // }

  if (!loaded) {
    return (
      <div>
        Loading
      </div>
    )
  }

  return (
    <div className='playlistDisplayContainer' onClick={showPlaylistIdFunc}>
      <div className='playlistDisplayText'>{selectedPlaylist ? selectedPlaylist : 'Playlist'}</div>
      <img className='playlistPlayIcon' src={play} height='10'></img>
      <div className='playlistMenu' id={showPlaylistId} >
        <div className='playlistMenuItemBlue'>Add Playlist</div>
        {playlistArr.map((playlist) => {
          return (
            <div className='playlistMenuItem'  key={Math.random()}>
              <div className='playlistMenuText' onClick={async (e ) => {
                setSelectedPlaylist(playlist.title)
                dispatch(playlistActions.selectCurrentPlaylist(playlist))
                startPlaylist()
                }
              }
              >{playlist.title}</div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default PlaylistDisplay
