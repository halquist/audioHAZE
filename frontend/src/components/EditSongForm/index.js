import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as songActions from "../../store/song";
import Uploading from "../UploadNewSongFormPage/Uploading";

import './EditSongForm.css';

const EditSongForm = ({ currentSong, trigger, rerender, setUploading, uploading, display, setType }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(currentSong.title);
  const [url, setUrl] = useState(currentSong.url);
  const [imageUrl, setImageUrl] = useState(currentSong.imageUrl);
  const [errors, setErrors] = useState([]);
  // const [uploading, setUploading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setType('updated');
    trigger(false);
    setErrors([]);
      const songId = currentSong.id;
      let updateSong = await dispatch(songActions.updateSong({ songId, title, url, imageUrl }))
        .catch(async (res) => {
          setUploading(false);
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
        if (updateSong) {
          rerender((prev) => !prev)
          setUploading(false);
          trigger(false);
          display(`/songs/${updateSong.findSong.id}`)
        }
  };

  const handleCancelClick = (e) => {
    trigger(false);
    setTitle(currentSong.title);
    // setUrl(currentSong.url);
    // setImageUrl(currentSong.imageUrl);
  };

  const updateSong = (e) => {
    const file = e.target.files[0];
    if (file) setUrl(file);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (file) setImageUrl(file);
  };

  return(
    <>
      <div id='editSongFormContainer'>
        <div id='editFormDiv'>
          <form onSubmit={handleSubmit} id='editForm'>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          <div>All fields are optional</div>
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
              // required
            />
            <label>
              Artwork
            </label>
            <input
              type='file'
              name='imageUrl'
              accept="image/*"
              // value={imageUrl}
              onChange={updateImage}
            />
              {!uploading &&
              <div id='cancelSubmitDiv'>
                    <button type="button" onClick={() => handleCancelClick()}>Cancel</button>
                    <button type='submit'>Submit Edit</button>
              </div>
                }
              {/* {uploading &&
                <Uploading />
              } */}
          </form>
        </div>
      </div>
    </>
  );
}

export default EditSongForm;
