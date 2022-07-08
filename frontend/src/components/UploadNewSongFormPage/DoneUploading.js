import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './NewSongForm.css';

const DoneUploading = ({ display, trigger, uploading}) => {

  const handleClick = () => {
    trigger('');
    uploading(false);
    // setMessageId('removeMessage')
  }

  return (
    <div id='uploadingMessage' >
        <Link id='doneUploading' exact to={display} className='uploadNotify' onClick={handleClick}>Check out your new song!</Link>
      </div>
  )
}

export default DoneUploading
