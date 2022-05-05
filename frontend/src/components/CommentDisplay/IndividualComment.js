import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import * as commentActions from "../../store/comment";

import './CommentDisplay.css';

const IndividualComment = ({ comment }) => {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  let sessionUserId = null;
  if (sessionUser) {
    sessionUserId = sessionUser.id
  }
  const handleSubmit = async (e) => {
    const id = comment.id;
    let deleteComment = await dispatch(commentActions.deleteComment( id ))
      if (deleteComment.comment.message === 'Success') {
      }
  };

  return(
    <div className='oneCommentContainer'>
      {comment.User &&
      <div className='commentUsername'>{comment.User.username}</div>
      }
      <div className='commentBody'>{comment.body}</div>
      {comment.userId === sessionUserId &&
        <div className='deleteDiv'>
          <button onClick={(e) => handleSubmit(e)} id='deleteSongButton'>Delete Comment</button>
        </div>
      }
    </div>
  )

}

export default IndividualComment;
