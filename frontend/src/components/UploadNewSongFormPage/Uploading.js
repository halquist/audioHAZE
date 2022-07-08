import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './NewSongForm.css';


const Uploading = ({ display, trigger, uploading }) => {

  // const [messageId, setMessageId] = useState('doneUploading')


  return (
        <svg version="1.1" id="uploading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="220px" height="30px" viewBox="-5 -15 230 50">
        {/* <svg version="1.1" id="uploading" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="166.079px" height="30px" viewBox="-7 -10 180 40" > */}
        <g>
          <path id='uText' fill='#ff0062' d="M12.665,15.417c0,1.449-0.356,2.569-1.058,3.328c-0.698,0.753-1.68,1.119-3.003,1.119c-1.312,0-2.285-0.365-2.978-1.117
            c-0.697-0.759-1.052-1.88-1.052-3.33V0.232H0V15.31c0,1.866,0.337,3.495,1.002,4.842c0.682,1.381,1.688,2.447,2.993,3.171
            c1.284,0.711,2.835,1.072,4.609,1.072c1.785,0,3.343-0.361,4.632-1.072c1.31-0.724,2.32-1.79,3.002-3.171
            c0.665-1.346,1.002-2.976,1.002-4.842V0.232h-4.575V15.417z"/>
          <path id='pText' fill='#ff0062' d="M39.565,1.182c-1.125-0.63-2.435-0.95-3.893-0.95h-9.425v23.93h4.575V15.43h4.85c1.458,0,2.767-0.317,3.89-0.941
            c1.137-0.631,2.03-1.536,2.656-2.689c0.616-1.137,0.929-2.467,0.929-3.953c0-1.485-0.313-2.817-0.929-3.96
            C41.594,2.729,40.701,1.819,39.565,1.182z M38.14,9.566c-0.227,0.47-0.533,0.819-0.936,1.068c-0.406,0.251-0.871,0.374-1.423,0.374
            h-4.958V4.653h4.958c0.55,0,1.014,0.124,1.418,0.378c0.405,0.255,0.713,0.608,0.94,1.079c0.235,0.489,0.355,1.073,0.355,1.736
            C38.495,8.499,38.375,9.078,38.14,9.566z"/>
          <polygon id='lText' fill='#ff0062' points="55.425,0.232 50.85,0.232 50.85,24.162 66.728,24.162 66.728,19.74 55.425,19.74 "/>
          <path id='oText' fill='#ff0062' d="M87.382,1.124C86.081,0.378,84.566,0,82.88,0s-3.201,0.378-4.502,1.124c-1.311,0.751-2.339,1.827-3.055,3.197
            c-0.706,1.351-1.063,2.927-1.063,4.687v6.379c0,1.76,0.357,3.337,1.063,4.687c0.717,1.371,1.744,2.447,3.055,3.196
            c1.299,0.746,2.814,1.125,4.502,1.125s3.203-0.379,4.502-1.124c1.311-0.751,2.338-1.826,3.055-3.197
            c0.706-1.351,1.063-2.927,1.063-4.687V9.007c0-1.759-0.357-3.335-1.063-4.687C89.721,2.951,88.692,1.875,87.382,1.124z
            M82.88,19.864c-0.807,0-1.492-0.173-2.093-0.528c-0.594-0.351-1.042-0.838-1.369-1.488c-0.335-0.666-0.505-1.457-0.505-2.353V8.899
            c0-0.895,0.17-1.687,0.505-2.352c0.327-0.651,0.775-1.138,1.369-1.489c0.601-0.355,1.286-0.528,2.093-0.528
            c0.808,0,1.492,0.173,2.094,0.528c0.593,0.351,1.041,0.838,1.368,1.489c0.336,0.667,0.506,1.458,0.506,2.352v6.596
            c0,0.895-0.17,1.686-0.505,2.352c-0.328,0.651-0.776,1.139-1.369,1.489C84.372,19.691,83.688,19.864,82.88,19.864z"/>
          <path id='aText' fill='#ff0062' d="M107.112,0.232l-8.819,23.93h4.926l1.697-4.939h8.074l1.697,4.939h4.929l-8.821-23.93H107.112z M111.473,14.802h-5.036
            l2.518-7.33L111.473,14.802z"/>
          <path id='dText' fill='#ff0062' d="M139.262,1.25c-1.371-0.675-3.035-1.017-4.941-1.017h-7.848v23.93h7.832c1.906,0,3.572-0.343,4.947-1.017
            c1.412-0.692,2.504-1.718,3.242-3.049c0.727-1.308,1.096-2.893,1.096-4.71V9.007c0-1.817-0.369-3.402-1.096-4.71
            C141.756,2.967,140.668,1.941,139.262,1.25z M138.938,8.884v6.627c0,1.378-0.375,2.401-1.148,3.13c-0.773,0.729-1.91,1.1-3.377,1.1
            h-3.363V4.653h3.363c1.467,0,2.604,0.37,3.377,1.099C138.563,6.482,138.938,7.506,138.938,8.884z"/>
          <rect id='iText' fill='#ff0062' x="154.844" y="0.232" width="4.576" height="23.93"/>
          <polygon id='nText' fill='#ff0062' points="183.71,15.311 174.173,0.232 170.21,0.232 170.21,24.146 174.755,24.146 174.755,9.298 184.265,24.146
            188.257,24.146 188.257,0.232 183.71,0.232 "/>
          <path id='gText' fill='#ff0062' d="M204.726,10.622v4.436h4.568v0.268c0,0.98-0.17,1.831-0.504,2.526c-0.322,0.673-0.764,1.169-1.35,1.517
            c-0.596,0.355-1.277,0.527-2.084,0.527c-0.813,0-1.531-0.173-2.137-0.514c-0.604-0.338-1.059-0.801-1.389-1.414
            c-0.334-0.618-0.502-1.361-0.502-2.21V9.116c0-0.952,0.168-1.79,0.502-2.489c0.326-0.683,0.773-1.197,1.365-1.572
            s1.27-0.557,2.068-0.557c0.531,0,1.055,0.121,1.555,0.357c0.506,0.241,0.938,0.583,1.318,1.047c0.375,0.458,0.646,1.018,0.805,1.664
            l0.133,0.539h4.836l-0.164-0.843c-0.275-1.426-0.816-2.703-1.607-3.796c-0.797-1.099-1.801-1.961-2.986-2.562
            C207.968,0.304,206.659,0,205.265,0c-1.689,0-3.203,0.384-4.5,1.142c-1.305,0.763-2.326,1.852-3.037,3.238
            c-0.699,1.365-1.053,2.958-1.053,4.736v6.642c0,1.693,0.363,3.21,1.08,4.507c0.723,1.313,1.758,2.342,3.076,3.06
            c1.301,0.71,2.824,1.07,4.525,1.07c1.689,0,3.203-0.385,4.5-1.143c1.307-0.764,2.328-1.856,3.037-3.247
            c0.699-1.369,1.053-2.965,1.053-4.742v-4.641H204.726z"/>
        </g>
      </svg>
  )
};

export default Uploading;
