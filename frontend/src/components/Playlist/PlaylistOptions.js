import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';


import * as playlistActions from '../../store/playlist'

const PlaylistOptions = ({ playlist, showTrigger, reloadTrigger }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const playlistState = useSelector(state => state.playlist);


  const [loaded, setLoaded] = useState(false)
  const [songArr, setSongArr] = useState([])
  const [trigger, setTrigger] = useState(false)
  const [showDelete, setShowDelete] = useState(false)


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
      dispatch(playlistActions.getPlaylistSongs(playlist))
        .then((res) => {
          setSongArr(res)
          return res
        })
        .then((res) => {
          setLoaded(true)
        })
  },[trigger, playlistState])

  // useEffect(() => {
  //  setCheckPlaylist(playlistState)
  //  console.log('wooooooooo')
  // },[playlistState])

  const removeSong = async (songId, num) => {
    const deleteId = document.getElementById(songId + '.' + num)
    console.log(deleteId)
    deleteId.innerHTML =
    `<div className='playlistMenuText' >deleting...</div>`
    const index = playlist.playlist.indexOf(songId)
    await dispatch(playlistActions.removeFromPlaylist(sessionUser.id, index, playlist.id))
      .then((ret) => {
        if (ret) {
          setTrigger((prev) => !prev)
        }
      })
  }

  const deletePlaylist = async () => {
    await dispatch(playlistActions.removePlaylist(playlist))
    .then((ret) => {
      if (ret.message === 'Success') {
        setTrigger((prev) => !prev)
        setShowDelete(false)
        showTrigger(false)
        reloadTrigger((prev) => !prev)
      }
    })
  }

  const deleteMenu = () => {
    if (showDelete) {
      return (
        <>
          <div className='deleteButton2'>
            confirm delete:
          </div>
          <div className='backButton'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            deletePlaylist()
          }}
          >
            yes
          </div>
          <div className='backButton'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setShowDelete(false)
          }}
          >
            no
          </div>
        </>
      )
    } else {
      return (
        <>
          <div
          className='deleteButton'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setShowDelete(true)
          }}
          >
            delete
          </div>
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
        </>
      )
    }
  }



  const songArrFunc = () => {
    if (songArr !== 'empty'){
    let num = 0
    return songArr.map((song) => {
      num++
      return (
        <div className='playlistMenuItem'  key={`${song.id}.${num}`}>
            <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText' id={`${song.id}.${num}`}>{num}. {song.title}</NavLink>
            <div className='xRemove'
              onClick={(e) => {
                removeSong(song.id, num)
              }}
            >
              x
            </div>
        </div>
      )
    })} else {
      return (
        <div className='editPlaylistTitle' >
          Playlist is Empty
        </div>
      )
    }
  }

  if (!loaded) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='editPlaylistContainer'
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
    >
      <div className='editPlaylistTitle'>
        Editing {playlist.title}
      </div>
    <div className='topBarEdit'>
      {deleteMenu()}

    </div>
      {songArrFunc()}
    </div>
  )
}

export default PlaylistOptions
