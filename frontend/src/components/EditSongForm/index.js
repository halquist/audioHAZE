import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as songActions from "../../store/song";

import './EditSongForm.css';

const EditSongForm = ({ currentSong }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentSong.title);
  const [url, setUrl] = useState(currentSong.url);
  const [imageUrl, setImageUrl] = useState(currentSong.imageUrl);
  const [errors, setErrors] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
      const songId = currentSong.id;
      let updateSong = await dispatch(songActions.updateSong({ songId, title, url, imageUrl: imageUrl || 'https://drive.google.com/file/d/1gOrGbOPr3Cngbytpi25ngUhrPOxoHj60/view?usp=sharing' }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        if (updateSong) {
          setShowEditForm(false);;
        }
  };

  const handleCancelClick = (e) => {
    setShowEditForm(false);
    setTitle(currentSong.title);
    setUrl(currentSong.url);
    setImageUrl(currentSong.imageUrl);
  };

  return(
    <>
      <button onClick={() => setShowEditForm(!showEditForm)} id='editSongButton'>Edit Song</button>
      {showEditForm &&
      <div id='editSongFormContainer'>
        <div id='editFormDiv'>
          <form onSubmit={handleSubmit} id='editForm'>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
              Song Title
            </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            <label>
              Song URL
            </label>
              <input
                type='text'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            <label>
              Image URL
            </label>
              <input
                type='text'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <div id='cancelSubmitDiv'>
                <button type="button" onClick={() => handleCancelClick()}>Cancel</button>
                <button type='submit'>Submit Edit</button>
              </div>
          </form>
        </div>
      </div>}
    </>
  );
}

export default EditSongForm;
