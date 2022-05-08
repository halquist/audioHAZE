import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import { getHearts } from '../../store/heart';

import './HeartForm.css'

const HeartForm = ({ target, sessionUserId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const song = useSelector(state => state.song);
  const heartsList = song[target].Hearts;
  const numHearts = heartsList.length;

  useEffect(()=> {
    dispatch(getHearts(target));
  }, [dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const heart = {
        songId: target,
        userId: sessionUser.id
      }
      dispatch(createHeart(heart));
    }
    dispatch(getHearts(target));
  };

  const handleUnheart = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const heart = {
        songId: target,
        userId: sessionUser.id,
        id: thisHeart.id
      }
      dispatch(deleteHeart(heart));
    }
    dispatch(getHearts(target));
  };
  
  let hearted = false; // variable passed to the hearted form to style the heart based on if session user has hearted or not
  let thisHeart = {};

  for (let i = 0; i < heartsList.length; i++) {
    if (heartsList[i].userId === sessionUserId) {
      hearted = true;
      thisHeart = heartsList[i]
      break;
    }
    hearted = false;
  }

  return (
    <>
      <div>{numHearts}</div>
      {hearted === false ?
        <button onClick={handleSubmit} className='heartButton'><HeartIcon classPass='notHearted'/></button> :
        <button onClick={handleUnheart} className='heartButton'><HeartIcon classPass='hearted'/></button>
      }
    </>
  )
}

export default HeartForm;
