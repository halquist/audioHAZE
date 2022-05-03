import { csrfFetch } from './csrf';
import { Redirect } from "react-router-dom";
import { restoreUser } from './session';

const LOAD = 'song/LOAD';
const ADD = 'song/ADD';
const LOAD_ONE = 'song/ADD_ONE';
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
  const { title, url, id } = song;
  console.log('store song', song)
  const response = await csrfFetch('/api/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      url,
      userId: id
    })
  });
  const data = await response.json();
  console.log('store data', data)
  dispatch(addSong(data.song));
  return data;
}

// loads a particular song into the store
export const getOneSong = (id) => async dispatch => {
  const sendId = parseInt(id, 10);
  const response = await fetch(`/api/songs/${sendId}`)
  // console.log('response ', response)
    const song = await response.json();
    dispatch(loadOneSong(song));
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
        const loadOneState = { ...state }
        loadOneState.currentSong = action.song;
        return loadOneState;
        default:
        return state;
    }
}

export default songReducer;
