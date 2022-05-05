import { csrfFetch } from './csrf';
// import { Redirect } from "react-router-dom";
// import { restoreUser } from './session';


const LOAD = 'song/LOAD';
const ADD = 'song/ADD';
const LOAD_ONE = 'song/ADD_ONE';
const SET_CURRENT = 'song/SET_CURRENT';
const UPDATE = 'song/UPDATE';
const REMOVE = 'song/REMOVE';
const ADD_SONG_LIST = 'song/ADD_SONG_LIST';

const load = (songs) => {
  return {
    type: LOAD,
    songs
  }
};

const addSong = (song) => {
  return {
    type: ADD,
    song
  }
};

const loadOneSong = (song) => {
  return {
    type: LOAD_ONE,
    song
  }
};

const currentSong = (song) => {
  return {
    type: SET_CURRENT,
    song
  }
};

const update = (song) => {
  return {
    type: UPDATE,
    song
  }
};

const remove = (song) => {
  return {
    type: REMOVE,
    song
  }
};

const addToSongList = (song) => {
  return {
    type: ADD_SONG_LIST,
    song
  }
};


// load songs from database on load
export const getSongs = () => async dispatch => {
  const response = await fetch(`/api/songs`);

  if (response.ok) {
    const songs = await response.json();
    dispatch(load(songs));
  }
};

// create a new song reference with title, userId, and a URL that links to the song
export const createSong = (song) => async (dispatch) => {
  const { title, url, id, imageUrl } = song;
  const response = await csrfFetch('/api/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      url,
      userId: id,
      imageUrl
    })
  });
  const data = await response.json();
  dispatch(addSong(data.song));

  return data;
}

// updates a song in the database and store when authorized user submits song update form
export const updateSong = (song) => async (dispatch) => {
  const { songId, title, url, imageUrl, userId } = song;
  const response = await csrfFetch('/api/songs', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      songId,
      title,
      url,
      imageUrl,
      userId
    })
  });
  const data = await response.json();
  await dispatch(update(data.song));
  console.log('store song', data.song)
  return data;
}

export const deleteSong = (id) => async (dispatch) => {
  const response = await csrfFetch('/api/songs', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  });
  const data = await response.json();
  dispatch(remove(id));

  // getSongs();
  // addToSongList();

  return data;
}

// loads a particular song into the store
export const getOneSong = (id) => async dispatch => {
  const sendId = parseInt(id, 10);
  const response = await fetch(`/api/songs/${sendId}`)
  const song = await response.json();
    dispatch(loadOneSong(song));
}

// sets the current song to play in the media bar
export const selectCurrentSong = (id) => async dispatch => {
  const songId = parseInt(id, 10);
  const response = await fetch(`/api/songs/${songId}`)
  const song = await response.json();
  dispatch(currentSong(song));
}

// returns an array of songs ordered by created date, descending
const sortList = (list) => {
  return list.sort((songA, songB) => {
    return new Date(songB.createdAt) - new Date(songA.createdAt);
  }).map((song) => song);
};


const initialState = {songList: []};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD:
        const allSongs = {};
        action.songs.forEach(song => {
          allSongs[song.id] = song
        });
        return {
          ...allSongs,
          ...state,
          songList: sortList(action.songs)
        }
      case ADD:
        const newState = { ...state, [action.song.id]: action.song}
        newState.songList.push(action.song);
        newState.songList = sortList(newState.songList)
        return newState;
      case LOAD_ONE:
        // const songList = state.songList;
        //may need to add songlist loading here eventually
        const loadOneState = { ...state,  [action.song.id]: action.song }
        // loadOneState.currentSong = action.song;
        return loadOneState;
      case UPDATE:
        const updateOneState = { ...state,  [action.song.id]: action.song }
        const listIdx = updateOneState.songList.findIndex(el => el.id === action.song.id);
        action.song.User = updateOneState.songList[listIdx].User // have to add the user object back to the updated song or it wont show up without refresh
        updateOneState.songList[listIdx] = action.song;
        updateOneState.songList = sortList(updateOneState.songList)
        return updateOneState;
      case SET_CURRENT:
        const setCurrentState = { ...state }
        setCurrentState.currentSong = action.song;
        return setCurrentState;
      case REMOVE:
        const removeOneState = { ...state }
        delete removeOneState[action.id];
        const removeIdx = removeOneState.songList.findIndex(el => el.id === action.song.songId);
        removeOneState.songList.splice(removeIdx, 1);
        removeOneState.songList = sortList(removeOneState.songList);
        return removeOneState;
      case ADD_SONG_LIST:
        const addSongListState = { ...state }
        addSongListState.songList.push(action.song);
        addSongListState.songList = sortList(addSongListState.songList)
        return addSongListState;
      default:
        return state;
    }
}

export default songReducer;
