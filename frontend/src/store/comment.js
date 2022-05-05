import { csrfFetch } from './csrf';

const LOAD = 'comment/LOAD';
const ADD = 'comment/ADD';
const REMOVE = 'comment/REMOVE';

const load = (comments) => {
  return {
    type: LOAD,
    comments
  }
};

const addComment = (comment) => {
  return {
    type: ADD,
    comment
  }
};

const remove = (comment) => {
  return {
    type: REMOVE,
    comment
  }
}

// load comments from database on load of song detail page
export const getComments = (songId) => async dispatch => {
  const sendId = parseInt(songId, 10);
  const response = await fetch(`/api/comments/${sendId}`);
  if (response.ok) {
    const comments = await response.json();
    console.log('comment response', comments);
    dispatch(load(comments));
  }
};

export const postComment = (comment) => async (dispatch) => {
  const { body, userId, songId } = comment;
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body,
      userId,
      songId
    })
  });
  const data = await response.json();
  console.log('data comment', data.comment)
  dispatch(addComment(data.comment));

  return data;
}

// returns an array of comments ordered by created date, Ascending
const sortList = (list) => {
  return list.sort((commentA, commentB) => {
    return new Date(commentA.createdAt) - new Date(commentB.createdAt);
  }).map((comment) => comment);
};

const commentReducer = (state = {commentList: []}, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = {}
      action.comments.forEach(comment => {
        newState[comment.id] = comment
      });
      return {
        ...newState,
        commentList: sortList(action.comments)
      }
    case ADD:
      console.log('reducer comment', action)
      newState = { ...state, [action.comment.id]: action.comment }
      // const listIdx = newState.commentList.findIndex(el => el.id === action.comment.id);
      // action.comment.User = newState.commentList[listIdx].User
      newState.commentList.push(action.comment);
      newState.commentList = sortList(newState.commentList)
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
