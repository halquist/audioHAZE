import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import './NewSongForm.css';

// page for adding new songs
const NewSongFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // if the user is not logged in, redirect to the signup page
  if (!sessionUser) return <Redirect to='/signup' />;

  const handleSubmit = (e) => {
    e.preventDefault();

      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return

}
