import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import * as songActions from "../../store/song";
import Uploading from "./Uploading";

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
  const [uploading, setUploading] = useState(false);



  // if the user is not logged in, redirect to the signup page
  if (!sessionUser) return <Redirect to='/login' />;

  // submits new song to database - if they don't specify an image a default one is used
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setErrors([]);
      // let newSong = await dispatch(songActions.createSong({ title, url, id: sessionUser.id, imageUrl: imageUrl || 'https://drive.google.com/file/d/1gOrGbOPr3Cngbytpi25ngUhrPOxoHj60/view?usp=sharing' }))
      //   .catch(async (res) => {
      //     const data = await res.json();
      //     if (data && data.errors) setErrors(data.errors);
      //   });
      let newSong = await dispatch(songActions.createSong({ title, url, id: sessionUser.id, imageUrl}))
        .catch(async (res) => {
          setUploading(false);
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        if (newSong) {
          setUploading(false);
          history.push(`/songs/${newSong.findSong.id}`);
        }
  };

  const updateSong = (e) => {
    const file = e.target.files[0];
    if (file) setUrl(file);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (file) setImageUrl(file);
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
            Song
          </label>
            <input
              type='file'
              name='url'
              // value={url}
              accept='audio/*'
              onChange={updateSong}
              required
            />
          <label>
            Artwork (optional)
          </label>
            <input
              type='file'
              name='imageUrl'
              accept="image/*"
              // value={imageUrl}
              onChange={updateImage}
            />
            {!uploading ?
              <button type='submit'>Upload</button> :
              <Uploading />
            }
        </form>
      </div>
    </div>
  );

}

export default NewSongFormPage;
