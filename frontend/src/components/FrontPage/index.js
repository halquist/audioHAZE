import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getSongs } from '../../store/song';

import './FrontPage.css';

const FrontPage = () => {
  const dispatch = useDispatch();

  const songList = useSelector(state => {
    // return state.songs.list.map(songId => state.pokemon[pokemonId]);
  });
  
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  if (!songList) {
    return null;
  }

  return (
    <div id='frontPageContainer'>
       {/* {songList.map((pokemon) => {
          return (
            <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
              <div
                className={
                  Number.parseInt(pokemonId) === pokemon.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }
              >
                <div
                  className="nav-entry-image"
                  style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                ></div>
                <div>
                  <div className="primary-text">{pokemon.name}</div>
                  <div className="secondary-text">
                    {pokemon.number} {pokemon.captured && "(Captured)"}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })} */}
    </div>
  );
}

export default FrontPage;
