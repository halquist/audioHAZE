import { csrfFetch } from './csrf';

const LOAD = 'playlist/LOAD'
const LOAD_ONE = 'playlist/LOAD_ONE'
const ADD = 'playlist/ADD'
const REMOVE = 'playlist/REMOVE'
const ADD_SONG = 'playlist/ADDSONG'
const SET_CURRENT = 'playlist/SET_CURRENT'
const GET_SONGS = 'playlist/GET_SONGS'
const REMOVE_SONG = 'playlist/REMOVE_SONG'
const ORDER_SONGS = 'playlist/ORDER_SONGS'

const load = (playlists) => {
  return {
    type: LOAD,
    playlists
  }
}

const loadOne = (playlist) => {
  return {
    type: LOAD_ONE,
    playlist
  }
}

const add = (playlist) => {
  return {
    type: ADD,
    playlist
  }
}

const remove = (playlist) => {
  return {
    type: REMOVE,
    playlist
  }
}

const addSong = (data, songId) => {
  return {
    type: ADD_SONG,
    payload: {data, songId}
  }
}

const removeSong = (index, playlistId) => {
  return {
    type: REMOVE_SONG,
    payload: {index, playlistId}
  }
}

const currentPlaylist = (playlist) => {
  return {
    type: SET_CURRENT,
    playlist
  }
}

const getSongs = (playlist) => {
  return {
    type: GET_SONGS,
    playlist
  }
}

const orderSongs = (playlist) => {
  return {
    type: ORDER_SONGS,
    playlist
  }
}


// load playlists for a specific user
export const getPlaylists = (userId) => async (dispatch) => {
  const id = parseInt(userId, 10);
  const response = await csrfFetch(`/api/playlists/user/${id}`)
  const playlists = await response.json()
  await dispatch(load(playlists))
  return playlists
}

// load specific playlist
export const getOnePlaylist = (playlist) => async (dispatch) => {
  const id = parseInt(playlist.id, 10);
  const response = await csrfFetch(`/api/playlists/${id}`)
  const playlists = await response.json()
  await dispatch(load(playlists))
  return playlists
}

// create new playlist
export const createPlaylist = (userId, title) => async (dispatch) => {
  // const { userId, title } = playlist
  const response = await csrfFetch('/api/playlists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      userId
    })
  })
  const data = await response.json();
  dispatch(add(data))
  return data
}

// remove playlist
export const removePlaylist = (playlist) => async (dispatch) => {
  const { id } = playlist
  const response = await csrfFetch(`/api/playlists/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
  const data = await response.json();
  dispatch(remove(id))
  return data
}

// add song to a playlist
export const addToPlaylist = (userId, playlistId, songId) => async (dispatch) => {
  // console.log('store song id', songId)
  const response = await csrfFetch('/api/playlists/add', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      playlistId,
      songId
    })
  })

  const data = await response.json();
  // console.log('add data', data)
  await dispatch(addSong(data, songId));
  return data;
}

export const removeFromPlaylist = (userId, index, playlistId, songId) => async (dispatch) => {
  const response = await csrfFetch('/api/playlists/remove', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      index,
      playlistId,
      songId
    })
  })

  const data = await response.json();
  // console.log('store data', data)
  await dispatch(removeSong(data.index2, playlistId));
  return data.updatePlaylist;
}

// set current playlist
export const selectCurrentPlaylist = (playlist) => async dispatch => {
  // const songId = parseInt(id, 10);
  // const response = await fetch(`/api/songs/${songId}`)
  // const song = await response.json();
  const current = await dispatch(currentPlaylist(playlist));
  return current
}

// get the songs from the current playlist
export const getPlaylistSongs = (playlist) => async dispatch => {
  if (playlist.playlist.length) {
    const playlistArr = playlist.playlist
    const songArr = []
    for (let i = 0; i < playlistArr.length; i++) {
      const sendId = parseInt(playlistArr[i], 10);
      const response = await fetch(`/api/songs/${sendId}`)
      if (response) {
        const data = await response.json();
        songArr.push(data)
      }
    }
    return songArr;
  } else {
    return 'empty'
  }
}

//reorders the songlist
export const reorderSongs = (playlistId, playlist, userId) => async (dispatch) => {
  // console.log('store song id', songId)
  const response = await csrfFetch(`/api/playlists/${playlistId}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      playlistId,
      playlist,
      userId
    })
  })

  const data = await response.json();
  await dispatch(orderSongs(data));
  return data;
}

const initialState = {playlistList: [], currentPlaylist: {}};

const playlistsReducer = (state = initialState, action) => {
  let newState
  let index
  switch(action.type) {
    case LOAD:
      newState = {...state}
      // newState = {playlistList: []}
      action.playlists.forEach(playlist => {
        newState[playlist.id] = playlist
      })
      newState.playlistList = action.playlists
      return newState;
    case ADD:
      newState = {...state}
      newState[action.playlist.id] = action.playlist
      return newState;
    case REMOVE:
      newState = {...state}
      // console.log('store playlist', action.playlist)
      delete newState[action.playlist.id]
      return newState;
    case ADD_SONG:
      newState = {...state}
      // console.log(newState)
      index = action.payload.data.id
      newState[index].playlist.push(action.payload.songId)
      // console.log('store', index, state.currentPlaylist.id, newState[index].playlist)
      if (index === state.currentPlaylist.id) {
        newState.currentPlaylist = newState[index]
      }
      return newState;
    case REMOVE_SONG:
      newState = {...state}
      index = action.payload.playlistId
      newState[action.payload.playlistId].playlist.splice(action.payload.index, 1)
      if (index === state.currentPlaylist.id) {
        newState.currentPlaylist = newState[index]
      }
      return newState
    case SET_CURRENT:
      newState = {...state}
      newState.currentPlaylist = action.playlist
      return newState
    case ORDER_SONGS:
      newState = {...state}
      index = action.playlist.id
      newState[index] = action.playlist
      if (index === state.currentPlaylist.id) {
        newState.currentPlaylist = newState[index]
      }
      return newState
    default:
      return state;
  }
}

export default playlistsReducer
