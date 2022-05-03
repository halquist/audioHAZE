import React from 'react';
import RadioPlayer from '../RadioPlayer';
import './AudioBar.css'

const AudioBar = () => {

return (
  <div className='audioBarContainer'>
    <RadioPlayer />
    <div className='audioBar'>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="1920px" height="110px" viewBox="0 0 1920 110" enableBackground="new 0 0 1920 110">
        <path fill="#4C4644" d="M1262.298,50c-4.219,0-8.21-1.934-10.86-5.263L1235.709,25l-15.744-19.737
          C1217.313,1.934,1213.322,0,1209.104,0h-121.207H960H832.104H710.896c-4.218,0-8.209,1.934-10.861,5.263L684.292,25l-15.729,19.737
          C665.912,48.066,661.92,50,657.702,50H0v60h1920V50H1262.298z"/>
        <path fill="#0F0E0E" d="M1266.771,60c-4.28,0-8.331-1.934-11.021-5.263L1239.789,35l-15.977-19.737
          c-2.69-3.329-6.741-5.263-11.021-5.263h-123.002H960H830.211H707.209c-4.28,0-8.331,1.934-11.021,5.263L680.211,35L664.25,54.737
          C661.56,58.066,657.509,60,653.229,60H0v50h1920V60H1266.771z"/>
        <path fill="#000000" d="M1214.06,21.92c-1.624-3.974-5.525-6.251-8.106-6.251H960H714.047c-2.581,0-6.482,2.277-8.106,6.251L661.838,110H960
          h298.162L1214.06,21.92z"/>
        <g>
          <path fill="#89857A" d="M1262.298,52.126c-2.616,0-5.14-0.633-7.39-1.812l2.495,3.086c2.298,2.843,5.712,4.474,9.368,4.474H1920
            v-5.748H1262.298z"/>
          <path fill="#89857A" d="M657.702,52.126H0v5.748h653.229c3.656,0,7.07-1.631,9.368-4.473l2.496-3.087
            C662.841,51.493,660.318,52.126,657.702,52.126z"/>
          <path fill="#89857A" d="M1221.173,10.186l-2.87-3.598c-2.259-2.836-5.611-4.462-9.199-4.462H710.896
            c-3.587,0-6.94,1.626-9.198,4.461l-2.87,3.599c2.497-1.499,5.379-2.312,8.381-2.312h505.582
            C1215.794,7.874,1218.676,8.687,1221.173,10.186z"/>
        </g>
        <g>
          <path fill="#D8CAA7" d="M1261.497,53.24c1.559,0.98,3.377,1.514,5.274,1.514H1920v-1.496h-657.702
            C1262.03,53.258,1261.764,53.252,1261.497,53.24z"/>
          <path fill="#D8CAA7" d="M0,53.258v1.496h653.229c1.897,0,3.716-0.533,5.275-1.514c-0.267,0.012-0.534,0.018-0.802,0.018H0z"/>
          <path fill="#D8CAA7" d="M710.896,3.258c-1.886,0-3.694,0.551-5.237,1.561c0.514-0.043,1.032-0.064,1.551-0.064h505.582
            c0.519,0,1.035,0.021,1.55,0.064c-1.544-1.01-3.352-1.561-5.237-1.561H710.896z"/>
        </g>
      </svg>
  </div>
</div>
)
}

export default AudioBar;
