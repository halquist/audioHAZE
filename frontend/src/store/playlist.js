import { csrfFetch } from './csrf';

const LOAD = 'playlist/LOAD'
const ADD = 'playlist/ADD'
const ADD_SONG = 'playlist/ADDSONG'

const load = (playlists) => {
  return {
    type: LOAD,
    playlists
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

// load playlists for a specific user
export const getPlaylists = (userId) => async (dispatch) => {
  const id = parseInt(userId, 10);
  const response = await csrfFetch(`/api/playlists/user/${id}`)
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
  console.log('store', playlistId)
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

const initialState = {};

const playlistsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case LOAD:
      newState = {}
      action.playlists.forEach(playlist => {
        newState[playlist.id] = playlist
      })
      return newState;
    case ADD:
      newState = {...state}
      newState[action.playlist.id] = action.playlist
      return newState;
    case ADD_SONG:
      newState = {...state}
      // console.log(newState)
      console.log('action', action)
      newState[action.payload.data.id].playlist.push(action.payload.songId)
    default:
      return state;
  }
}

export default playlistsReducer
