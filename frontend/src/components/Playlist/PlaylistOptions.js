import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


import * as playlistActions from '../../store/playlist'

const PlaylistOptions = ({ playlist, showTrigger, reloadTrigger, playlistSend, reloadOptions, updatePlaylist }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const playlistState = useSelector(state => state.playlist);


  const [loaded, setLoaded] = useState(false)
  const [songArr, setSongArr] = useState([])
  const [trigger, setTrigger] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [playlistOrder, setPlaylistOrder] = useState([])
  const [elements, setElements] = useState([])

  // console.log('playlistState', playlistState)

  useEffect(() => {
      dispatch(playlistActions.getPlaylistSongs(playlist))
        .then((res) => {
          setSongArr(res)
          const orderArr = res.map(el => {
            return el.id
          })
          setPlaylistOrder(orderArr)
          // updatePlaylist(res)
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
                // updatePlaylist(res)
              })
              .then((res) => {
                setLoaded(true)
              })
            }
          })
        })
  },[playlistState, playlist.playlist])

  useEffect(() => {
  //  setCheckPlaylist(playlistState)
  //  updatePlaylist(playlist)
  },[playlistState])

  const removeSong = async (songId, num, songTitle) => {
    let deleteId = document.getElementById(songId + '.' + num)
    deleteId.innerHTML =
    "<div className='playlistMenuText'}>deleting...</div>"
    let index = playlist.playlist.indexOf(songId)
    await dispatch(playlistActions.removeFromPlaylist(sessionUser.id, index, playlist.id, songId))
      .then((ret) => {
        if (ret) {
          console.log('removeplaylist return', ret)
          // updatePlaylist(ret)
          setTrigger((prev) => !prev)
          reloadTrigger((prev) => !prev)
        }
      })
  }


  // const removeSong = async (songId, num, songTitle) => {
  //   // setLoaded(false)
  //   reloadOptions(false)
  //   reloadOptions(true)
  //   reloadTrigger((prev) => !prev)
  //   let deleteId = document.getElementById(songId + '.' + num)
  //   let nextSibling = deleteId.nextElementSibling
  //   console.log('nextSibling', nextSibling)
  //   let nextSiblingId
  //   if (deleteId.nextElementSibling) {
  //     nextSiblingId = nextSibling.id
  //   } else {
  //     nextSiblingId = deleteId.id
  //   }
  //   deleteId.id = nextSiblingId
  //   if (nextSibling) {
  //     deleteId.innerHTML = nextSibling.innerHTML
  //     nextSibling.innerHTML = null
  //   }
  //   console.log('deleteId', deleteId)
  //   console.log(songId + '.' + num, songTitle)
  //   // deleteId.classList.remove()
  //   // deleteId.innerHTML =
  //   // "<div className='playlistMenuText'}>deleting...</div>"
  //   let index = playlist.playlist.indexOf(songId)
  //   // while (index === -1) {
  //   //   setTrigger((prev) => !prev)
  //   //   reloadTrigger((prev) => !prev)
  //   //   index = playlist.playlist.indexOf(songId)
  //   // }
  //   console.log(playlist)
  //   console.log('index', index)
  //   await dispatch(playlistActions.removeFromPlaylist(sessionUser.id, index, playlist.id))
  //     .then((ret) => {
  //       if (ret) {
  //         setTrigger((prev) => !prev)
  //         // showTrigger(false)
  //         reloadTrigger((prev) => !prev)
  //         reloadOptions(true)
  //         // showTrigger(true)
  //         // setLoaded(true)
  //       }
  //     })
  // }

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

  const handleOnDragStart = (result) => {
    setElements(
      songArr.map((song, i) => {
        return (
              <li className='playlistMenuItem'  id={`${song.id}.${i}`} >
                  <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText' style={{ fontFamily: 'DS-DIGIB', fontSize: '1.3em' }}>{i + 1}. {song.title}</NavLink>
                  <div className='xRemove'
                  style={{ fontFamily: 'DS-DIGIB', fontSize: '1.2em' }}
                    onClick={(e) => {
                      // console.log('click stuff', song.id, i)
                      removeSong(song.id, i, song.title)
                    }}
                    >
                    x
                  </div>
              </li>
        )
      })
    )
  }

  const handleOnDragEnd = (result) => {
    const newArr = playlistOrder
    console.log('old', newArr)
    const [reorderedItem] = newArr.splice(result.source.index, 1);
    newArr.splice(result.destination.index, 0, reorderedItem);
    setPlaylistOrder(newArr)
    dispatch(playlistActions.reorderSongs(newArr, sessionUser.id))
    console.log('new', newArr)
  }

  // // used to create a clone of each song list item which is used to display while click and dragging
  // const elements = songArr.map((song, i) => {
  //   return (
  //         <li className='playlistMenuItem'  id={`${song.id}.${i}`} >
  //             <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText' style={{ fontFamily: 'DS-DIGIB', fontSize: '1.3em' }}>{i + 1}. {song.title}</NavLink>
  //             <div className='xRemove'
  //             style={{ fontFamily: 'DS-DIGIB', fontSize: '1.2em' }}
  //               onClick={(e) => {
  //                 // console.log('click stuff', song.id, i)
  //                 removeSong(song.id, i, song.title)
  //               }}
  //               >
  //               x
  //             </div>
  //         </li>
  //   )
  // })


  const songArrFunc = () => {
    if (songArr !== 'empty'){
    return (
      <DragDropContext onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='droppable'
        renderClone={(provided, snapshot, rubric) => (
          // console.log('snapshot', rubric.source.index)
          // console.log(elements[rubric.source.index])
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {elements[rubric.source.index]}
          </div>
        )}
        >
          {(provided, snapshot) => (
            <ul className='songList' {...provided.droppableProps} ref={provided.innerRef}>
              { songArr.map((song, i) => {
                return (
                  <Draggable key={`${song.id}.${i}`} draggableId={`${song.id}.${i}`} index={i}>
                    {(provided, snapshot) => (
                      <li className='playlistMenuItem'  id={`${song.id}.${i}`} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <NavLink exact to={`/songs/${song.id}`} className='playlistMenuText' >{i + 1}. {song.title}</NavLink>
                          <div className='xRemove'
                            onClick={(e) => {
                              // console.log('click stuff', song.id, i)
                              removeSong(song.id, i, song.title)
                            }}
                            >
                            x
                          </div>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    )
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
      <div className='loadingText'>Loading...</div>
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
