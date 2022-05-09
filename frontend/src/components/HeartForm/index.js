import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import { getOneSong } from '../../store/song';

import './HeartForm.css'

const HeartForm = ({ target, sessionUserId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const heart = useSelector(state => state.heart);
  // const heartList = useSelector(state => state.song[target].Hearts);
  // const songHeartList = useSelector(state => state.song[target].Hearts);
  const [songHearts, setSongHearts] = useState(heart.heartList.filter(heart => heart.songId === target));
  const [numHearts, setNumHearts] = useState(songHearts.length);
  const [thisHeart, setThisHeart] = useState(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id));
  const [hearted, setHearted] = useState(false); // variable passed to the hearted form to style the heart based on if session user has hearted or not
  // const [testThisHeart, setTestThisHeart] = useState(Object.keys(heart).find(obj => obj.userId === sessionUser.id && obj.songId == target))
  const [testThisHeart, setTestThisHeart] = useState(Object.keys(heart))

  console.log(testThisHeart)

  useEffect(() => {
    setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
    setSongHearts(heart.heartList.filter(heart => heart.songId === target))
  }, [heart])


  useEffect(() => {
    if(thisHeart.length) {
      setHearted(true)
    }
  }, [thisHeart])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionUser) {
      const heart = {
        songId: target,
          userId: sessionUser.id
        }
        dispatch(createHeart(heart));
      }
      setHearted(true);
      // dispatch(getOneSong(target))
      setSongHearts(heart.heartList.filter(heart => heart.songId === target))
      setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
      setNumHearts((prevNumHearts) => prevNumHearts + 1)
      console.log('submit', songHearts)
      console.log('this heart submit', thisHeart.id)
  };

  const handleUnheart = (e) => {
    e.preventDefault();
    // dispatch(getOneSong(target))
    setSongHearts(heart.heartList.filter(heart => heart.songId === target))
    setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
    console.log('delete', songHearts)
    console.log('this heart delete', thisHeart.id)
    if (sessionUser) {
      const heart = {
        songId: target,
        userId: sessionUser.id,
        id: thisHeart.id
      }
      dispatch(deleteHeart(heart));
    }
     setHearted(false);
     setNumHearts((prevNumHearts) => prevNumHearts -1)
  };


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
