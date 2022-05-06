import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import './HeartForm.css'

const HeartForm = ({target, hearted, thisHeart, numHearts}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
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
  };

  return (
    <div id='heartedContainer'>
      {hearted === false ?
      <button onClick={handleSubmit} className='heartButton'><HeartIcon classPass='notHearted'/></button> :
      <button onClick={handleUnheart} className='heartButton'><HeartIcon classPass='hearted'/></button>
    }
    <div>{numHearts} Hearts</div>
    </div>
  )
}

export default HeartForm;
