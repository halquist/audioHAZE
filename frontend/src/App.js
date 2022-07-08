import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import FrontPage from './components/FrontPage'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import NewSongFormPage from './components/UploadNewSongFormPage';
import Navigation from "./components/Navigation";
import SongDetail from './components/SongDetail';
import LazerGrid from './components/LazerGrid';
import AudioBar from './components/AudioBar';
import Uploading from './components/UploadNewSongFormPage/Uploading';
import DoneUploading from './components/UploadNewSongFormPage/DoneUploading';
import HomeLoad from './components/HomeLoad';

import * as sessionActions from './store/session';
import { getSongs } from './store/song';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [display, setDisplay] = useState('');
  const [type, setType] = useState('new');

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {uploading &&
        <Uploading display={display} trigger={setDisplay} uploading={setUploading} />
      }
      {display &&
        <DoneUploading display={display} trigger={setDisplay} uploading={setUploading} type={type} />
      }
      {/* <HomeLoad /> */}
      {isLoaded && (
        <Switch>
        <Route path='/' exact={true}>
          <FrontPage isLoaded={isLoaded} />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/newSong'>
          <NewSongFormPage setUploading={setUploading} uploading={uploading} display={setDisplay} setType={setType} />
        </Route>
        <Route path='/songs/:songId'>
          <SongDetail isLoaded={isLoaded} setUploading={setUploading} uploading={uploading} display={setDisplay} setType={setType} />
        </Route>
        <Route path='/pyramid'>
          <LazerGrid />
        </Route>
      </Switch>
      )}
      <AudioBar />
    </>
  );
}

export default App;
