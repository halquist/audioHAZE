import { csrfFetch } from './csrf';
import { restoreUser } from './session';

const ADD = 'song/ADD';
const REMOVE = 'song/REMOVE';

const addSong = (song) => {
  return {
    type: ADD,
    song
  }
};

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
  return(response);
}

const initialState = {};

const songReducer = (state = initialState, action) => {
    // console.log(action.song.id);
    switch (action.type) {
      case ADD:
        const newState = { ...state, [action.song.id]: action.song}
        return newState;
      default:
        return state;
    }
}

export default songReducer;
