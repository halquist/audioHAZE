import { csrfFetch } from './csrf';
import { Redirect } from "react-router-dom";
import { restoreUser } from './session';

const LOAD = 'song/LOAD';
const ADD = 'song/ADD';
const LOAD_ONE = 'song/ADD_ONE';
const SET_CURRENT = 'song/SET_CURRENT';
const REMOVE = 'song/REMOVE';

const load = (songList) => ({
  type: LOAD,
  songList
});

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
}


// load songs from database on load
export const getSongs = () => async dispatch => {
  const response = await fetch(`/api/songs`);
  if (response.ok) {
    const songList = await response.json();
    // console.log('response', songList)
    dispatch(load(songList));
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
        action.songList.forEach(song => {
          allSongs[song.id] = song
        });
        return {
          ...allSongs,
          ...state,
          songList: sortList(action.songList)
        }
      case ADD:
        const newState = { ...state, [action.song.id]: action.song, if (songList){songList: sortList(action.songList)}}
        return newState;
      case LOAD_ONE:
        const songList = state.songList;
        //may need to add songlist loading here eventually
        const loadOneState = { ...state,  [action.song.id]: action.song }
        // loadOneState.currentSong = action.song;
        return loadOneState;
      case SET_CURRENT:
        const setCurrentState = { ...state }
        setCurrentState.currentSong = action.song;
        return setCurrentState;
        default:
        return state;
    }
}

export default songReducer;
