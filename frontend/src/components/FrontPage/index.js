import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams, useLocation } from 'react-router-dom';
import PlayButton from '../PlayButton';
import SongBlade from '../SongBlade';
import SongBladeChannel from '../SongBladeChannel';
import { getSongs } from '../../store/song';

import './FrontPage.css';

const FrontPage = ({isLoaded}) => {
  const dispatch = useDispatch();
  // const song = useSelector(state=> state.song);
  const sessionUser = useSelector(state => state.session.user);
  const song = useSelector(state => state.song);
  // const heart = useSelector(state => state.heart)
  const [songList, setSongList] = useState(song.songList);
  const [hearted, setHearted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let sessionUserId = null;
  if (sessionUser) {
    sessionUserId = sessionUser.id
  }

  useEffect(() => {
    dispatch(getSongs())
      .then((ret) => {
        setSongList(ret)
      })
      .then(setLoaded(true))
  },[]);

  // useEffect(() => {
  //   dispatch(getSongs())
  //     .then((ret) => {
  //       setSongList(ret)
  //     })
  //     console.log('hearted', hearted)
  //   // dispatch(getHearts());
  // },[hearted]);

  // loads all songs in the store into a song list
  // const songList = useSelector(state =>{
  //   return state.song.songList.map(song => song)
  // });

  // const [songList, setsongList] = useState(songList);

  // shuffles the songlist to return some random songs
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // creates a random songlist to give variety to home page lists
  let randomSongList = songList.map(song => song);
  randomSongList = shuffle(randomSongList);

  let popSongList = songList.map(song => song).sort((songA, songB) => songB.Hearts.length - songA.Hearts.length);

  // create various category lists of songs for front page display
  const [ latestList, setLatestList ] = useState(songList.slice(0, 8)) // 8 most recently uploaded songs
  const [ oldestList, setOldestList ] = useState(songList.slice(songList.length - 8, songList.length)) // 8 oldest uploaded songs
  // const [ upAndComingList, setUpAndComingList ] = useState(randomSongList.slice(0, 8))
  const [ popList, setPopList ] = useState(popSongList.slice(0, 8))
  const [ picksList, setPicksList ] = useState(randomSongList.slice(songList.length - 8, songList.length))


  useEffect(() => {
    setSongList(song.songList);
    setLatestList(songList.slice(0, 8));
    setOldestList(songList.slice(songList.length - 8, songList.length));
    // setUpAndComingList(randomSongList.slice(0, 8));
    setPopList(popSongList.slice(0, 8));
    setPicksList(randomSongList.slice(songList.length - 8, songList.length))
  }, [songList]);

  // if(!songList.length) {
  //   setSongList(song.songList)
  // }

  if (!loaded) {
    return (
        <div>Loading</div>
    )
  };


  return (
    <div className='mainFrontPageContent'>
      <SongBladeChannel title='Popular Tracks' themeList={popList} isLoaded={isLoaded} sessionUserId={sessionUserId} trigger={setHearted}/>
      <SongBladeChannel title='Latest Uploads' themeList={latestList} isLoaded={isLoaded} sessionUserId={sessionUserId} trigger={setHearted}/>
      <SongBladeChannel title='Picks For You' themeList={picksList} isLoaded={isLoaded} sessionUserId={sessionUserId} trigger={setHearted}/>
      <SongBladeChannel title='Deep Tracks' themeList={oldestList} isLoaded={isLoaded} sessionUserId={sessionUserId} trigger={setHearted}/>
      {/* <SongBladeChannel title='Up and Coming Artists' themeList={upAndComingList} isLoaded={isLoaded} sessionUserId={sessionUserId} /> */}
    </div>
  );
}

export default FrontPage;
