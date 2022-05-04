import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import * as songActions from "../../store/song";

import './NewSongForm.css';

// page for adding new songs
const NewSongFormPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState([]);



  // if the user is not logged in, redirect to the signup page
  if (!sessionUser) return <Redirect to='/login' />;

  const handleSubmit = async (e) => {
    console.log('imageurl', imageUrl)
    e.preventDefault();
    setErrors([]);
      let newSong = await dispatch(songActions.createSong({ title, url, id: sessionUser.id, imageUrl }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
          // return <Redirect to='/' />;
        });
        if (newSong) {
          history.push(`/songs/${newSong.song.id}`);
        }
  };

  return (
    <div id='newSongFormContainer'>
      <div className='formDiv'>
        <div className='title'>Upload A Song</div>
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
          <button type='submit'>Upload</button>
        </form>
      </div>
    </div>
  );

}

export default NewSongFormPage;
