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
    body: JSON.stringify({
      title,
      url,
      userId: id
    })
  });
  const data = await response.json();
  dispatch(addSong(data.song));
  return(response);
}

const initialState = {};

const songReducer = (state = initialState, action) => {

  // switch (action.type) {
  //   case ADD:
  //     newState = Object.assign({}, state);
  //     newState.user = action.user;
  //     return newState;
  //   ;
  //   case REMOVE:
  //     newState = Object.assign({}, state);
  //     newState.user = null;
  //     return newState;
  //   default:
  //     return state;
  // }
    let newState;
    switch (action.type) {
      case ADD:
        newState = Object.assign({}, state);
        newState.songs[action.song.id] = action.song;
        return newState;
      default:
        return state;
    }
}

export default songReducer;
