import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';


import * as playlistActions from '../../store/playlist'

const PlaylistOptions = ({ playlist, showTrigger }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const playlistState = useSelector(state => state.playlist);


  const [loaded, setLoaded] = useState(false)
  const [songArr, setSongArr] = useState([])
  const [trigger, setTrigger] = useState(false)


  useEffect(() => {
      dispatch(playlistActions.getPlaylistSongs(playlist))
        .then((res) => {
          // console.log(res)
          setSongArr(res)
        })
        .then((res) => {
          setLoaded(true)
        })
  },[])

  useEffect(() => {
    // if(trigger) {
      console.log(playlist)
      dispatch(playlistActions.getPlaylistSongs(playlist))
        .then((res) => {
          // console.log(res)
          setSongArr(res)
          return res
        })
        .then((res) => {
          setLoaded(true)
        })
      // }
      console.log('run forest run')
  },[trigger, playlistState])

  // useEffect(() => {
  //  setCheckPlaylist(playlistState)
  //  console.log('wooooooooo')
  // },[playlistState])

  const removeSong = async (songId) => {
    const index = playlist.playlist.indexOf(songId)
    await dispatch(playlistActions.removeFromPlaylist(sessionUser.id, index, playlist.id))
      .then((ret) => {
        if (ret) {
          setTrigger((prev) => !prev)
        }
      })

  }

  const songArrFunc = () => {
    if (songArr !== 'empty'){
    let num = 0
    return songArr.map((song) => {
      num ++
      return (
        <div className='playlistMenuItem'  key={Math.random()}>
            <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText'>{num}. {song.title}</NavLink>
            <div className='xRemove'
              onClick={(e) => removeSong(song.id)}
            >
              x
            </div>
        </div>
      )
    })} else {
      return (
        <div className='playlistMenuItem'  key={Math.random()}>
          Please Add Songs
        </div>
      )
    }
  }

  if (!loaded) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className='editPlaylistContainer'
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
    >
    <div className='topBarEdit'>
      <div
      className='backButton'
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        showTrigger(false)
      }}
      >
        back
      </div>
    </div>
      <div className='editPlaylistTitle'>
        Editing {playlist.title}
      </div>
      {songArrFunc()}
    </div>
  )
}

export default PlaylistOptions
