import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './components/FrontPage'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import NewSongFormPage from './components/UploadNewSongFormPage';
import * as sessionActions from './store/session';
import Navigation from "./components/Navigation";
import LazerGrid from './components/LazerGrid';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route path='/' exact>
          <FrontPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/newSong'>
          <NewSongFormPage />
        </Route>
      </Switch>
      )}
      <LazerGrid />
    </>
  );
}

export default App;
