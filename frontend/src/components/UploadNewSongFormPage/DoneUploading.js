import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './NewSongForm.css';

const DoneUploading = ({ display, trigger, uploading, type}) => {

  const handleClick = () => {
    trigger('');
    uploading(false);
  }

  const handleExit = () => {
    trigger('');
    uploading(false);
  }



  return (
    <div id='uploadingMessage' >
        <Link id='doneUploading' exact='true' to={display} className='uploadNotify' onClick={handleClick}>Check out your {type} song!</Link>
        <div id='messageExit' onClick={handleExit}>x</div>
    </div>
  )
}

export default DoneUploading
