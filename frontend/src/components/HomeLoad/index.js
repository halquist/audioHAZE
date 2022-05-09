import { useEffect } from 'react';
import { getSongs } from '../../store/song';
import { getHearts } from '../../store/heart';
import { useDispatch } from 'react-redux';

// this loads songs back into the store on refresh

const HomeLoad = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
    // dispatch(getHearts());
  },[]);

return(null);
}

export default HomeLoad;
