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
  // const heart = useSelector(state => state.heart);
  const song = useSelector(state => state.song[target]);
  // const sessionUserId = sessionUser.id || -1;
  const heartList = useSelector(state => state.heart.heartList);

  // const [sessionUserId, setSessionUserId] = useState(sessionUser.id)

  const [currentSongHearts, setCurrentSongHearts] = useState(target.Hearts)

  const [numHearts, setNumHearts] = useState(target.Hearts.length);

  const [hearted, setHearted] = useState(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false); // variable passed to the hearted form to style the heart based on if session user has hearted or not

  // const [testThisHeart, setTestThisHeart] = useState(() => {
  //     const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)
  //     return thisHeart.id
  //   })

  useEffect(() => {
    setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    setNumHearts(target.Hearts.length);
    console.log(target.Hearts.length)
  }, [])


  useEffect(() => {
    // setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    setCurrentSongHearts(target.Hearts.filter(heart => heart.songId === target.id))
    setNumHearts(target.Hearts.length);
    // setNumHearts(currentSongHearts.length);
    // setNumHearts(currentSongHearts.length);
    // setTestThisHeart(() => {
    //   const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
    //   if(thisHeart.length) {
    //     return thisHeart[0].id
    //   }
    // })
  }, [hearted, target])


  // useEffect(() => {
    // setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
    // setNumHearts(currentSongHearts.length)
    // setTestThisHeart(() => {
    //   const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)
    //   if(thisHeart.length) {
    //     return thisHeart[0].id
    //   }
    // })
  // }, [target])

  // useEffect(() => {
  //   setHearted(target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id).length ? true : false)
  // }, [heart])


  const handleSubmit = (e) => {

    e.preventDefault();
    if (sessionUser) {
      const heart = {
        songId: target,
        userId: sessionUserId
      }

      dispatch(createHeart(heart));
      setHearted(true);
      trigger((prev) => !prev)
      // setSongHearts(heart.heartList.filter(heart => heart.songId === target))
      // setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
      // dispatch(getOneSong(target))
      setCurrentSongHearts(target.Hearts.filter(heart => heart.songId === target.id))
      setNumHearts((prevNumHearts) => prevNumHearts + 1)
      // setTestThisHeart(() => {
      //   const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)
      //   if(thisHeart.length) {
      //     return thisHeart[0].id
      //   }
      // })
    }
    dispatch(getHearts());
  };

  const handleUnheart = (e) => {
    e.preventDefault();
    if (sessionUser) {
    // if (!testThisHeart) {
    //   //  dispatch(getOneSong(target))
    //   // const subHeartList = heartList.map(heart => heart)
    //   setTestThisHeart(() => {
    //     const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)
    //     if(thisHeart.length) {
    //       return thisHeart[0].id
    //     }
    //   })
    // }
    // dispatch(getOneSong(target))
    setHearted(false);
    trigger((prev) => !prev)

    // setSongHearts(heart.heartList.filter(heart => heart.songId === target))
    // setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
      const thisHeartHere = target.Hearts.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)[0].id
      const heart = {
        songId: target,
        userId: sessionUserId,
        id: thisHeartHere
      }
      dispatch(deleteHeart(heart));
      setCurrentSongHearts(target.Hearts.filter(heart => heart.songId === target.id))
      setNumHearts((prevNumHearts) => prevNumHearts - 1)
      // setTestThisHeart(() => {
      //   const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target.id)
      //   if(thisHeart.length) {
      //     return thisHeart[0].id
      //   }
      // })
    }
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
