import { csrfFetch } from './csrf';
import { Redirect } from "react-router-dom";
import { restoreUser } from './session';

const LOAD = 'song/LOAD';
const ADD = 'song/ADD';
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
  console.log('data+ ', data)
  dispatch(addSong(data.song));
  return <Redirect to='/' />;
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
        const newState = { ...state, [action.song.id]: action.song, songList: sortList(action.songList)}
        return newState;
      default:
        return state;
    }
}

export default songReducer;
