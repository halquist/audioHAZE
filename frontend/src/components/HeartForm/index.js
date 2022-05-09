import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createHeart, deleteHeart } from '../../store/heart';
import HeartIcon from "./HeartIcon";

import { getOneSong } from '../../store/song'

import './HeartForm.css'

const HeartForm = ({ target }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const heart = useSelector(state => state.heart);
  const song = useSelector(state => state.song[target]);
  const sessionUserId = sessionUser || -1;

  const heartList = useSelector(state => state.heart.heartList);

  const [currentSongHearts, setCurrentSongHearts] = useState(heartList.filter(heart => heart.songId === target))



  const [numHearts, setNumHearts] = useState(currentSongHearts.length);

  const [hearted, setHearted] = useState(currentSongHearts.filter(heart => heart.userId === sessionUserId && heart.songId === target).length ? true : false); // variable passed to the hearted form to style the heart based on if session user has hearted or not



  const [testThisHeart, setTestThisHeart] = useState(() => {
      const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
      return thisHeart.id
    })




  useEffect(() => {
    // setTestThisHeart(() => {
    //   for (const [key, value] of Object.entries(heart)){
    //     if (value.userId === sessionUser.id && value.songId === target) {
    //       return key;
    //     }
    //   }})
    setTestThisHeart(() => {
      const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
      if(thisHeart.length) {
        return thisHeart[0].id
      }
    })
  }, [heart, hearted])


  useEffect(() => {
    setHearted(currentSongHearts.filter(heart => heart.userId === sessionUserId && heart.songId === target).length ? true : false)
    setTestThisHeart(() => {
      const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
      if(thisHeart.length) {
        return thisHeart[0].id
      }
    })
  }, [])

  // useEffect(() => {
  //   setHearted(songHearts.filter(heart => heart.userId === sessionUser.id && heart.songId === target).length ? true : false)
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
      // setSongHearts(heart.heartList.filter(heart => heart.songId === target))
      // setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
      dispatch(getOneSong(target))
      setCurrentSongHearts(heartList.filter(heart => heart.songId === target))
      setNumHearts((prevNumHearts) => prevNumHearts + 1)
      setTestThisHeart(() => {
        const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
        if(thisHeart.length) {
          return thisHeart[0].id
        }
      })
    }
  };

  const handleUnheart = (e) => {
    e.preventDefault();
    if (!testThisHeart) {
      const subHeartList = heart.heartList.map(heart => heart)
      setTestThisHeart(() => {
        const thisHeart = subHeartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
        if(thisHeart.length) {
          return thisHeart[0].id
        }
      })
    }

    // setSongHearts(heart.heartList.filter(heart => heart.songId === target))
    // setThisHeart(songHearts.filter(heart => heart.songId === target && heart.userId === sessionUser.id))
    if (sessionUser) {
      dispatch(getOneSong(target))
      setHearted(false);
      const heart = {
        songId: target,
        userId: sessionUserId,
        id: testThisHeart
      }
      dispatch(deleteHeart(heart));
      setCurrentSongHearts(heartList.filter(heart => heart.songId === target))
      setNumHearts((prevNumHearts) => prevNumHearts - 1)
      setTestThisHeart(() => {
        const thisHeart = heartList.filter(heart => heart.userId === sessionUserId && heart.songId === target)
        if(thisHeart.length) {
          return thisHeart[0].id
        }
      })
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
