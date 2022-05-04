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

    const handleSubmit = '';

  // const handleSubmit = async (e) => {
  //   console.log('imageurl', imageUrl)
  //   e.preventDefault();
  //   setErrors([]);
  //     let newSong = await dispatch(songActions.createSong({ title, url, id: sessionUser.id, imageUrl }))
  //       .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //         // return <Redirect to='/' />;
  //       });
  //       if (newSong) {
  //         history.push(`/songs/${newSong.song.id}`);
  //       }
  // };

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
              required
            />
          <button type='submit'>Submit Edit</button>
        </form>
      </div>
    </div>
  );
}

export default EditSongForm;
