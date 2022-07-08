import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import * as songActions from "../../store/song";

import './EditSongForm.css';

const DeleteSong = ({ currentSong, trigger }) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
      const songId =  currentSong.id;
      let deleteSong = await dispatch(songActions.deleteSong({ songId }))
        if (deleteSong.song.message === 'Success') {
          history.push(`/`);
        }
  };

  const handleCancelClick = (e) => {
    trigger(false);
  };

  return (
    <div id='editFormDiv'>
    <form onSubmit={handleSubmit} id='editForm'>
      <ul>
        <div>Are you sure you want to delete this song?</div>
      </ul>
        <div id='cancelSubmitDiv'>
          <button type="button" onClick={() => handleCancelClick()}>Cancel</button>
          <button type='submit'>Delete</button>
        </div>
    </form>
  </div>
  )
}

export default DeleteSong;
