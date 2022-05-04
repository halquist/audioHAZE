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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
      const songId = currentSong.id;
      let updateSong = await dispatch(songActions.updateSong({ songId, title, url, imageUrl: imageUrl || 'https://drive.google.com/file/d/1gOrGbOPr3Cngbytpi25ngUhrPOxoHj60/view?usp=sharing' }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        // if (updateSong) {
        //   history.push(`/songs/${newSong.song.id}`);
        // }
  };

  return(
    <div id='editSongFormContainer'>
      <div className='formDiv'>
        <div className='title'>Edit Song</div>
        <form onSubmit={handleSubmit}>
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
          <button type='submit'>Submit Edit</button>
        </form>
      </div>
    </div>
  );
}

export default EditSongForm;
