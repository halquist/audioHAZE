import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import { getHearts } from '../../store/heart';

import './HeartForm.css'

const HeartForm = ({ target, sessionUserId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const heart = useSelector(state => state.heart);
  const heartList = useSelector(state => state.heart.heartList);

  const heartsList = heartList.filter(heart => heart.songId === target)

  const [numHearts, setNumHearts] = useState(heartsList.length);

  useEffect (() => {
    setNumHearts(heartsList.length)
  },[heart])

  const handleSubmit = (e) => {
    e.preventDefault();
    let heartedCatch = true;
    for (let i = 0; i < heartsList.length; i++) {
      if (heartsList[i].userId === sessionUserId) {
        heartedCatch = false;
      }
    }
      if (sessionUser && heartedCatch) {
        const heart = {
          songId: target,
          userId: sessionUser.id
        }
        dispatch(createHeart(heart));
      }

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
    // dispatch(getHearts(target));
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
