import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import PlaylistForm from './PlaylistForm'
import PlaylistOptions from './PlaylistOptions'

import * as playlistActions from '../../store/playlist'

import play from '../../images/play.svg'
import gear_icon from '../../images/gear_icon.svg'

const PlaylistDisplay = ({ startPlaylist, updatePlaylist }) => {
  const dispatch = useDispatch();
  const playlist = useSelector(state => state.playlist);
  const playlistGet = useSelector(state => state.playlist.currentPlaylist);
  const userId = useSelector((state) => state.session.user?.id)

  const [showPlaylistId, setShowPlaylistId] = useState('')
  const [playlistArr, setPlaylistArr] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [selectedPlaylist, setSelectedPlaylist] = useState('')
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false)
  const [showPlaylistOptions, setShowPlaylistOptions] = useState(false)
  const [editPlaylist, setEditPlaylist] = useState(null)
  const [trigger, setTrigger] = useState(false)
  const [currentPlaylist, setCurrentPlaylist] = useState(null)
  const [reloadOptions, setReloadOptions] = useState(true)


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

  useEffect(() => {
    if(userId) {
      // setLoaded(false)
      dispatch(playlistActions.getPlaylists(userId))
        .then((res) => {
          setPlaylistArr(res)
          // dispatch(playlistActions.selectCurrentPlaylist(playlist))
          // if (currentPlaylist) {
          //   setEditPlaylist(
          //     playlist.playlistList.forEach((element) => {
          //       if(element.id === currentPlaylist.id) {
          //         console.log('element', element)
          //         return element
          //       }
          //     })
          //     )
          //   console.log('current playlist', currentPlaylist)
          // }
        })
        .then((res) => {
          // reset(res)
          // setLoaded(true)
        })
    }
  }, [trigger])

  // reloads options menu when song is added
  useEffect((res) => {
    // setLoaded(false)
    if(userId && playlist) {
      // setPlaylistArr(playlist.playlistList)
      reset()
    }
    // setLoaded(true)
  }, [playlist])

  const reset = async (res)=> {
    if(userId && playlist) {
      // console.log('playlist', playlist)
      if (res) {
        setPlaylistArr(res)
        // dispatch(playlistActions.selectCurrentPlaylist(playlist))
      } else {
        setPlaylistArr(playlist.playlistList)
        // dispatch(playlistActions.selectCurrentPlaylist(playlist))
      }
    }
  }

  // console.log('currentPlaylist', currentPlaylist)

  // useEffect(() => {
  //   if(userId) {
  //     setLoaded(false)
  //     dispatch(playlistActions.getPlaylists(userId))
  //       .then((res) => {
  //         setPlaylistArr(res)
  //       })
  //       .then((res) => {
  //         setLoaded(true)
  //       })
  //   }
  // }, [trigger])



  const createPlaylist = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowCreatePlaylist(true)
  }


  const showPlaylistIdFunc = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowCreatePlaylist(false)
    setShowPlaylistOptions(false)
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
      null
    )
  }

  return (
    <>
    <div className='playlistDisplayContainer' onClick={(e) => showPlaylistIdFunc(e)}>
      <div className='playlistDisplayText'>
        {selectedPlaylist ? selectedPlaylist : 'Playlists'}
        <div className='playlistHighlight'></div>
      </div>
      {showPlaylistId === '' ?
      <img className='playlistPlayIcon' src={play} height='10'></img>:
      <div className='playlistPlayIcon'>x</div>
      }
      {!showCreatePlaylist && !showPlaylistOptions &&
        <div className='playlistMenu' id={showPlaylistId} >
          <div className='playlistMenuItemBlue'
            onClick={(e) => createPlaylist(e)}
          >
            Create New Playlist
          </div>
          {playlistArr.map((playlist) => {
            let idActive = 'playlistMenuItem'
            if (playlist.id === playlistGet?.id) {
              idActive = 'playlistMenuItemActive'
            }
            return (
              <div className={idActive}  key={Math.random()}>
                <div className='playlistMenuText' onClick={async (e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  // console.log('playlist', playlist)
                  if (playlist.playlist.length) {
                    setSelectedPlaylist(playlist.title)
                    setCurrentPlaylist(playlist)
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
                >
                  {playlist.title}
                </div>
                  <img
                  className='playlistGearIcon'
                  src={gear_icon}
                  height='13'
                  onClick={async (e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    await setEditPlaylist(playlist)
                    await setCurrentPlaylist(playlist)
                    setShowPlaylistOptions(true)
                  }}
                  ></img>
              </div>
            )
          })}
        </div>
      }
      {showCreatePlaylist &&
        <div className='playlistMenu' id={showPlaylistId}>
          <PlaylistForm trigger={setTrigger} showTrigger={setShowPlaylistId} reloadTrigger={setShowCreatePlaylist} />
          {/* <PlaylistForm trigger={setShowPlaylistId} /> */}
        </div>
      }
      {showPlaylistOptions && reloadOptions &&
        <div className='playlistMenu' id={showPlaylistId}>
           <PlaylistOptions playlist={editPlaylist} showTrigger={setShowPlaylistOptions} reloadTrigger={setTrigger} playlistSend={playlistArr} reloadOptions={setReloadOptions} updatePlaylist={updatePlaylist} />
        </div>
      }
    </div>
    <div className='playlistMenuBottom' id={showPlaylistId}></div>
    </>
  )
}

export default PlaylistDisplay
