import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart, getHearts } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import { getOneSong } from '../../store/song'

import './HeartForm.css'

const HeartForm = ({ target, sessionUserId, trigger }) => {

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const song = useSelector(state => state.song[target]);
  const heartList = useSelector(state => state.heart.heartList);


  const [numHearts, setNumHearts] = useState(target.Hearts.length);

  const [hearted, setHearted] = useState(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false); // variable passed to the hearted form to style the heart based on if session user has hearted or not

  const [loaded, setLoaded] = useState(false);

  const [localTrigger, setLocalTrigger] = useState(false);


  useEffect(() => {
    setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    setNumHearts(target.Hearts.length);
    setLoaded(true);
  }, [])


  useEffect(() => {
    setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    setNumHearts(target.Hearts.length);
  }, [target])


  useEffect(() => {

  }, [localTrigger])

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (sessionUser) {
      const heart = {
        songId: target,
        userId: sessionUserId
      }
      setLoaded(false)
      let newHeart = await dispatch(createHeart(heart))
        if (newHeart) {
          dispatch(getOneSong(target.id))
          setNumHearts((prev) => prev + 1);
          setHearted(true);
          setLoaded(true)
        }
        // .then((ret) => {
        //   dispatch(getOneSong(target.id))
        //   // setNumHearts(ret.findSong.Hearts.length)
        //   // setHearted(true);
        // })
        // .then(() => {
        //   setNumHearts((prev) => prev + 1);
        //   setHearted(true);
        //   }
        // )
        // .then(() => setLoaded(true))
      trigger((prev) => !prev)
      setLocalTrigger((prev) => !prev)
    }
  };


  const handleUnheart = async (e) => {
    e.preventDefault();
    if (sessionUser) {
    setLoaded(false);

    const thisHeartHere = target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)[0].id
    const heart = {
      songId: target,
      userId: sessionUserId,
      id: thisHeartHere
    }
    let killHeart = await dispatch(deleteHeart(heart))
      if (killHeart) {
        trigger((prev) => !prev);
          setLocalTrigger((prev) => !prev)
          setNumHearts((prev) => prev - 1);
          setHearted(false);
          setLoaded(true);
      }
    // .then((ret) => {
    //   // setNumHearts(ret.findSong.Hearts.length)
    //   // setHearted(false);
    // })
    // .then(() => {
    //       trigger((prev) => !prev);
    //       setLocalTrigger((prev) => !prev)
    //       setNumHearts((prev) => prev - 1);
    //       setHearted(false);
    //       }
    //     )
    //     .then(() => setLoaded(true))
    }
  };

  if (!loaded) {
    // console.log('notloaded')
    return (
      <>
        <div>{numHearts}</div>
        <button onClick={handleSubmit} className='heartButton'><HeartIcon classPass='notHearted'/></button>
      </>
    )
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
