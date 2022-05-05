import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import * as songActions from "../../store/song";

import './EditSongForm.css';

const DeleteSong = ({ currentSong }) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = async (e) => {
    // e.preventDefault();

      const songId =  currentSong.id;
      let deleteSong = await dispatch(songActions.deleteSong({ songId }))
      console.log('handle submit', deleteSong.song);
        if (deleteSong.song.message === 'Success') {
          history.push(`/`);
        }
  };

  return (
      <button onClick={() => handleSubmit()} id='deleteSongButton'>Delete Song</button>
  )
}

export default DeleteSong;
