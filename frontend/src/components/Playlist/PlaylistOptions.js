import './Playlist.css'

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import * as playlistActions from '../../store/playlist'

const PlaylistOptions = ({ playlist, showTrigger }) => {
  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false)
  const [songArr, setSongArr] = useState([])
  const [num, setNum] = useState(0)


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

  const songArrFunc = () => {
    let num = 0
    return songArr.map((song) => {
      num ++
      return (
        <div className='playlistMenuItem'  key={Math.random()}>
          <div className='playlistMenuText'
          // onClick={}
          >
            {num}. {song.title}
          </div>
        </div>
      )
    })
  }

  if (!loaded) {
    return (
      null
    )
  }

  return (
    <div className='editPlaylistContainer'
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
    >
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
      <div className='editPlaylistTitle'>
        Editing {playlist.title}
      </div>
      {songArrFunc()}
    </div>
  )
}

export default PlaylistOptions
