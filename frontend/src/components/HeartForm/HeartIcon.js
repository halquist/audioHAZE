import React from "react";

import './HeartForm.css'

const HeartIcon = ({classPass}) => {

  return (
    <svg version="1.1" className={`heartIcon ${classPass}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="96.338px" height="74.379px" viewBox="0 0 96.338 74.379" enableBackground="new 0 0 96.338 74.379" fill="#11111">
      <path d="M95.093,23.204L73.134,1.245c-1.66-1.66-4.354-1.661-6.014,0L48.169,20.197L29.216,1.245c-1.66-1.66-4.352-1.661-6.013,0
      L1.245,23.204c-1.66,1.66-1.66,4.353,0,6.013l43.917,43.917c0.797,0.797,1.879,1.245,3.006,1.245c1.128,0,2.209-0.448,3.007-1.245
      l43.917-43.917c0.797-0.797,1.245-1.879,1.245-3.007S95.89,24.001,95.093,23.204z"/>
    </svg>
  )

}

export default HeartIcon;
