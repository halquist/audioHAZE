import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import './HeartForm.css'

const HeartForm = (target, hearted) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);


  const handleSubmit = (e) => {
    console.log('target', target)
    e.preventDefault();
    const heart = {
      songId: target.target,
      userId: sessionUser.id
    }
    dispatch(createHeart(heart));
  };

  return (
    <button onClick={handleSubmit} className='heartButton'><HeartIcon hearted={hearted}/></button>
  )

}

export default HeartForm;
