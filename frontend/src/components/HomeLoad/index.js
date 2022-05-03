import { useState, useEffect } from 'react';
import { getSongs } from '../../store/song';
import { useSelector, useDispatch } from 'react-redux';

// this loads songs back into the store on refresh

const HomeLoad = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  },[dispatch]);

return(null);
}

export default HomeLoad;
