import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import * as commentActions from "../../store/comment";

import './CommentDisplay.css';

const IndividualComment = ({ comment }) => {

  return(
    <div className='oneCommentContainer'>
      {comment.User &&
      <div className='commentUsername'>{comment.User.username}</div>
      }
      <div className='commentBody'>{comment.body}</div>
    </div>
  )

}

export default IndividualComment;
