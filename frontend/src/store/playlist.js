import { csrfFetch } from './csrf';

const LOAD = 'playlist/LOAD'
const LOAD_ONE = 'playlist/LOAD_ONE'
const ADD = 'playlist/ADD'
const ADD_SONG = 'playlist/ADDSONG'
const SET_CURRENT = 'playlist/SET_CURRENT'

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

const addSong = (data, songId) => {
  return {
    type: ADD_SONG,
    payload: {data, songId}
  }
}

const currentPlaylist = (playlist) => {
  return {
    type: SET_CURRENT,
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
  await dispatch(addSong(data, songId));
  return data;
}

// set current playlist
export const selectCurrentPlaylist = (playlist) => async dispatch => {
  // const songId = parseInt(id, 10);
  // const response = await fetch(`/api/songs/${songId}`)
  // const song = await response.json();
  const current = await dispatch(currentPlaylist(playlist));
  return current
}

const initialState = {playlistList: [], currentPlaylist: {}};

const playlistsReducer = (state = initialState, action) => {
  let newState;
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
    case ADD_SONG:
      newState = {...state}
      // console.log(newState)
      newState[action.payload.data.id].playlist.push(action.payload.songId)
      return newState;
    case SET_CURRENT:
      newState = {...state}
      newState.currentPlaylist = action.playlist
      return newState
    default:
      return state;
  }
}

export default playlistsReducer
