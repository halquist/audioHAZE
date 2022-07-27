import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import PlaylistForm from './PlaylistForm'

import * as playlistActions from '../../store/playlist'

import play from '../../images/play.svg'

const PlaylistDisplay = ({ startPlaylist }) => {
  const dispatch = useDispatch();
  const playlist = useSelector(state => state?.playlist);
  const userId = useSelector((state) => state.session.user?.id)

  const [showPlaylistId, setShowPlaylistId] = useState('')
  const [playlistArr, setPlaylistArr] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false)


  useEffect(() => {
    if(userId) {
      dispatch(playlistActions.getPlaylists(userId))
        .then((res) => {
          setPlaylistArr(res)
        })
        .then((res) => {
          setLoaded(true)
        })
    }
  },[])

  const createPlaylist = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowCreatePlaylist(true)
  }


  const showPlaylistIdFunc = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (showPlaylistId === '') {
      setShowPlaylistId('showPlaylist')
      setShowCreatePlaylist(false)
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
      null
    )
  }

  return (
    <div className='playlistDisplayContainer' onClick={(e) => showPlaylistIdFunc(e)}>
      <div className='playlistDisplayText'>{selectedPlaylist ? selectedPlaylist : 'Playlist'}</div>
      <img className='playlistPlayIcon' src={play} height='10'></img>
      {!showCreatePlaylist &&
        <div className='playlistMenu' id={showPlaylistId} >
          <div className='playlistMenuItemBlue'
            onClick={(e) => createPlaylist(e)}
          >
            Create New Playlist
          </div>
          {playlistArr.map((playlist) => {
            return (
              <div className='playlistMenuItem'  key={Math.random()}>
                <div className='playlistMenuText' onClick={async (e) => {
                  // console.log('playlist', playlist)
                  if (playlist.playlist.length) {
                    setSelectedPlaylist(playlist.title)
                    // dispatch(playlistActions.selectCurrentPlaylist(playlist))
                    startPlaylist(playlist)
                  } else {
                    setSelectedPlaylist('Playlist Empty')
                    const messageTimeout = setTimeout(() => {
                      setSelectedPlaylist(playlist.title)
                      clearTimeout(messageTimeout)
                    }, 2000)
                  }
                  }
                }
                >{playlist.title}</div>
              </div>
            )
          })}
        </div>
      }
      {showCreatePlaylist &&
        <div className='playlistMenu' id={showPlaylistId}>
          <PlaylistForm trigger={setShowPlaylistId} />
        </div>
      }
    </div>

  )
}

export default PlaylistDisplay
