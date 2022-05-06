import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import * as commentActions from "../../store/comment";


import './CommentForm.css';

const CommentForm = ({ currentSong }) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState([]);
  const [showCommentForm, setShowCommentForm] = useState(false);

  const userId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  });




  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
      const songId = currentSong.id;
      let postedComment = await dispatch(commentActions.postComment({ songId, body, userId }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        if (postedComment) {
          setShowCommentForm(false);
          setBody('');
        }
  };

  const handleCancelClick = (e) => {
    setShowCommentForm(false);
    setBody('');
  };

  return (
    <>
      <button onClick={() => setShowCommentForm(!showCommentForm)} id='commentButton'>Leave Comment</button>
      {showCommentForm &&
      <div id='commentFormContainer'>
        <div id='commentFormDiv'>
          <form onSubmit={handleSubmit} id='commentForm'>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
              Comment:
            </label>
              <textarea
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                id='textArea'
              />
              <div id='commentCancelSubmitDiv'>
                <button type="button" onClick={() => handleCancelClick()}>Cancel</button>
                <button type='submit'>Submit Comment</button>
              </div>
          </form>
        </div>
      </div>}
    </>
  )
}

export default CommentForm;
