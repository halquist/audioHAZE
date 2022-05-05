import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import IndividualComment from "./IndividualComment";
import * as commentActions from "../../store/comment";

import './CommentDisplay.css';

const CommentDisplay = ({ comments }) => {

  const songComments = useSelector(state =>{
    return state.comment.commentList.map(comment => comment)
  });

  const numSongComments = songComments.length

  return(
    <div id='commentContainer'>
      <div className='displayTitle displayComments'>{numSongComments} Comments</div>
      {songComments.map((comment) => {
        return (
        <IndividualComment comment={comment} key={comment.id} />
        )
      })}
    </div>
  )

}

export default CommentDisplay;
