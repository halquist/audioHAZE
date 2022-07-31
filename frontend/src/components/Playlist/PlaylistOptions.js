import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';


import * as playlistActions from '../../store/playlist'

const PlaylistOptions = ({ playlist, showTrigger, reloadTrigger, playlistSend }) => {
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
      // setLoaded(false)
      dispatch(playlistActions.getPlaylistSongs(playlist))
        .then((res) => {
          playlistSend.forEach(element => {
            if (element.id === playlist.id) {
              dispatch(playlistActions.getPlaylistSongs(element))
              .then((res) => {
                setSongArr(res)
              })
              .then((res) => {
                setLoaded(true)
              })
            }
          })
        })
  },[playlistState])

  // useEffect(() => {
  //  setCheckPlaylist(playlistState)
  //  console.log('wooooooooo')
  // },[playlistState])

  const removeSong = async (songId, num) => {
    const deleteId = document.getElementById(songId + '.' + num)
    console.log('deleteId', deleteId)
    console.log(songId + '.' + num)
    deleteId.innerHTML =
    "<div className='playlistMenuText'}>deleting...</div>"
    const index = playlist.playlist.indexOf(songId)
    await dispatch(playlistActions.removeFromPlaylist(sessionUser.id, index, playlist.id))
      .then((ret) => {
        if (ret) {
          setTrigger((prev) => !prev)
          // deleteId.innerHTML = null
          // deleteId.classList.remove('playlistMenuItem')
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

  // const refresh = () => {
  //   console.log('refresh')
  //   setTrigger((prev) => !prev)
  //   setShowDelete(false)
  //   // showTrigger(false)
  //   reloadTrigger((prev) => !prev)
  //   playlistSend.forEach(element => {
  //     if (element.id === playlist.id) {
  //       console.log('here here')
  //       dispatch(playlistActions.getPlaylistSongs(element))
  //       .then((res) => {
  //         // console.log(res)
  //         setSongArr(res)
  //       })
  //       .then((res) => {
  //         setLoaded(true)
  //       })
  //     }
  //   })
  // }

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
          <div className='noButton'
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
            Delete Playlist
          </div>
          <div
          className='backButton'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            showTrigger(false)
          }}
          >
            Back
          </div>
        </>
      )
    }
  }



  const songArrFunc = () => {
    if (songArr !== 'empty'){
    return songArr.map((song, i) => {
      return (
        <div className='playlistMenuItem'  id={`${song.id}.${i}`} key={`${song.id}.${i}`}>
            <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText' >{i + 1}. {song.title}</NavLink>
            <div className='xRemove'
              onClick={(e) => {
                console.log('click stuff', song.id, i)
                removeSong(song.id, i)
              }}
              >
              x
            </div>
        </div>
      )
    })
  } else {
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
      {/* <div className='editTopBar'> */}
        <div className='editPlaylistTitle'>
          Editing {playlist.title}
        </div>
        {/* <div className='refreshButton'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            refresh()
          }}
        >
          R
        </div> */}
      {/* </div> */}
    <div className='topBarEdit'>
      {deleteMenu()}

    </div>
      {songArrFunc()}
    </div>
  )
}

export default PlaylistOptions
