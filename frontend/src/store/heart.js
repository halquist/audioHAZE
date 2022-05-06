import { csrfFetch } from './csrf';

const LOAD = 'heart/LOAD';
const ADD = 'heart/ADD';
const REMOVE = 'heart/REMOVE';

const load = (hearts) => {
  return {
    type: LOAD,
    hearts
  }
};

const addHeart = (heart) => {
  return {
    type: ADD,
    heart
  }
};

const remove = (heart) => {
  return {
    type: REMOVE,
    heart
  }
};

// load hearts from database on load
export const getHearts = (songId) => async dispatch => {
  const sendId = parseInt(songId, 10);
  const response = await fetch(`/api/hearts/${sendId}`);

  if (response.ok) {
    const hearts = await response.json();
    dispatch(load(hearts));
  }
};

// create a new heart reference with userId and songId
export const createHeart = (heart) => async (dispatch) => {
  const { userId, songId } = heart;
  const response = await csrfFetch('/api/hearts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      songId
    })
  });
  const data = await response.json();
  dispatch(addHeart(data.findHeart));

  return data;
}

export const deleteHeart = (id) => async (dispatch) => {
  const response = await csrfFetch('/api/hearts', {
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

  return data;
}

const heartReducer = (state = { heartList: [] }, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      const allHearts = {}
      action.hearts.forEach(heart => {
        allHearts[heart.id] = heart
      });
      return {
        ...allHearts,
        heartList: action.hearts.map((heart) => heart)
      };
    case ADD:
      newState = { ...state, [action.heart.id]: action.heart}
      return newState;
    case REMOVE:
      const newState = { ...state }
      delete newState[action.id];
      const removeIdx = newState.heartList.findIndex(el => el.id === action.heart.heartId);
      newState.heartList.splice(removeIdx, 1);
      return newState;
    default:
      return state;
  }
}

export default heartReducer;
