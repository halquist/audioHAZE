import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOneSong, selectCurrentSong } from '../../store/song';
import * as playlistActions from '../../store/playlist'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './RadioPlayer.css';
import { PlaylistDisplay } from '../Playlist';

const RadioPlayer = ({  }) => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const song = useSelector(state => state.song.currentSong);
  const playlistGet = useSelector(state => state.playlist.currentPlaylist)

  const [playlist, setPlaylist] = useState(playlistGet?.playlist || null);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [playlistMaxIndex, setPlaylistMaxIndex] = useState(0);

  useEffect(()=> {
    if(song) {
      dispatch(getOneSong(song.id));
    }
  }, []);

  useEffect(() => {
    if (playlistGet) {
      setPlaylist(playlistGet?.playlist)
    }
  },[playlistGet])

  const startPlaylist = async (playlist) => {
    console.log('starting playlist outer')
    await dispatch(playlistActions.selectCurrentPlaylist(playlist))
      .then((ret) => {
        console.log('playlist return', ret.playlist.playlist)
        setPlaylist(ret.playlist.playlist)
        return ret.playlist.playlist
      })
      .then((ret) => {
        dispatch(selectCurrentSong(ret[0]))
        setPlaylistIndex((prev) => prev += 1)
      })

    await setPlaylist(playlistGet.playlist)
    console.log(playlist)
        console.log('starting playlist inner')
    // if (playlist) {
    // }
  }

  const loadNextSong = () => {
    // console.log('next song')
    if (playlist.length < 2) {
      return
    }
    if (playlistIndex < playlistMaxIndex) {
      dispatch(selectCurrentSong(playlist[playlistIndex]))
      setPlaylistIndex((prev) => prev += 1)
    } else {
      setPlaylistIndex(1)
      dispatch(selectCurrentSong(playlist[0]))
    }
  }

  const loadPrevSong = () => {
    // console.log('prev song')
    if (playlist.length < 2) {
      return
    }
    if (playlistIndex !== 1) {
      // setPlaylistIndex((prev) => prev -= 1)
      dispatch(selectCurrentSong(playlist[playlistIndex - 2]))
      setPlaylistIndex((prev) => prev -= 1)
    } else {
      setPlaylistIndex(playlistMaxIndex)
      dispatch(selectCurrentSong(playlist[playlistMaxIndex - 1]))
      // setPlaylistIndex((prev) => prev += 1)
    }
  }

  // let songLink = song?.url;

  // converts google drive links to work with audio player (not needed anymore with AWS set up now)
  // if (song && song.url.startsWith('https://drive.google.com')) {
  //   songLink = 'https://drive.google.com/uc?export=download&id=' + song.url.split('/')[5];
  // }

  let songData;
  if (song) {
    songData = (
      <>
        <NavLink exact to={`/songs/${song.id}`} className='songTitle truncate'>{song.title}</NavLink>
        <div className='songArtist truncate'>{song.User.username}</div>
      </>
    );
  }

  const fillerData = (
    <>
      <div className='songTitle'>audioHAZE</div>
      <div className='songArtist'>radio</div>
    </>
  );


  return (
      <div id='audioPlayerWrapper'>
        <PlaylistDisplay playlist={playlist} setPlaylist={setPlaylist} startPlaylist={startPlaylist} />
        <div className='songDetails'>
          {song && songData}
          {!song && fillerData}
        </div>
      <AudioPlayer
        autoPlay
        src={song?.url}
        onEnded={loadNextSong}
        showSkipControls={true}
        onClickPrevious={loadPrevSong}
        onClickNext={loadNextSong}
        // onPlay={e => console.log("onPlay")}
        // other props here
      />
      </div>
  )
}

export default RadioPlayer;
