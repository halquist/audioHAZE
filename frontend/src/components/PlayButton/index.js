import React from "react";
import { useDispatch } from 'react-redux';
import { selectCurrentSong } from '../../store/song';

import './PlayButton.css'

const PlayButton = (target) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(selectCurrentSong(target.target));
  };

  return (
    <form onSubmit={handleSubmit} className='playButtonForm'>
      <button type='submit' className='playButton'>
        <svg version="1.1" className="chromePlayButton" xmlns="http://www.w3.org/2000/svg" x="0px"
         y="0px" width="80px" height="80px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
          <g>
            <linearGradient id="SVGID_1_1" gradientUnits="userSpaceOnUse" x1="69.1084" y1="0" x2="69.1084" y2="46.9248">
              <stop  offset="0" stopColor="#DA1C5C"/>
              <stop  offset="1" stopColor="#991C5C"/>
            </linearGradient>
            <path fill="url(#SVGID_1_1)" d="M94.901,46.197l-86-42.993C7.583,2.545,6.019,2.615,4.765,3.39C3.511,4.165,2.748,5.533,2.748,7.007
              l0.001,85.984c0,1.474,0.763,2.842,2.017,3.617c0.683,0.422,1.458,0.635,2.235,0.635c0.65,0,1.301-0.148,1.901-0.448l85.999-42.991
              c1.44-0.721,2.351-2.193,2.351-3.804C97.252,48.389,96.342,46.917,94.901,46.197z"/>
            <linearGradient id="SVGID_2_1" gradientUnits="userSpaceOnUse" x1="26.4995" y1="28.6553" x2="26.4995" y2="80.1851">
            <stop  offset="0" stopColor="#DA1C5C"/>
            <stop  offset="1" stopColor="#991C5C"/>
            </linearGradient>
            <path fill="url(#SVGID_2_1)" d="M7,5.59c0.219,0,0.438,0.052,0.634,0.149l86,42.993c0.483,0.241,0.783,0.727,0.783,1.268
              s-0.3,1.026-0.783,1.269L7.636,94.259c-0.199,0.1-0.412,0.149-0.635,0.149c-0.264,0-0.521-0.073-0.744-0.211
              c-0.421-0.261-0.673-0.711-0.673-1.206L5.583,7.007c0-0.495,0.251-0.945,0.672-1.206C6.479,5.663,6.737,5.59,7,5.59 M7,2.755
              c-0.777,0-1.552,0.212-2.235,0.635C3.511,4.165,2.748,5.533,2.748,7.007l0.001,85.984c0,1.474,0.763,2.842,2.017,3.617
              c0.683,0.422,1.458,0.635,2.235,0.635c0.65,0,1.301-0.148,1.901-0.448l85.999-42.991c1.44-0.721,2.351-2.193,2.351-3.804
              c0-1.611-0.91-3.083-2.351-3.803l-86-42.993C8.301,2.904,7.65,2.755,7,2.755L7,2.755z"/>
          </g>
        </svg>
      </button>
    </form>
  )
}

export default PlayButton;
