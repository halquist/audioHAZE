import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import SongBlade from '../SongBlade';
import { getSongs } from '../../store/song';


import './SongBladeChannel.css';

// front page display for a category of songs

const SongBladeChannel = ({ title, themeList, isLoaded, sessionUserId, trigger }) => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
    }
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [isLoaded, themeList]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 540;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };


  return (
      <div className='outerFrontPageContainer'>
        <div className='displayTitle'>{title}</div>
        <div className='bladeChannelWrapper'>
          <button 
            className={`scrollArrow scrollArrowLeft ${!canScrollLeft ? 'hidden' : ''}`}
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className='innerFrontPageContainer' ref={scrollRef}>
            {isLoaded &&
            themeList.map((song) => {
                return (
                  <SongBlade className='songBlade' song={song} sessionUserId={sessionUserId} key={`${song.title}` + `${song.id}`} trigger={trigger}/>
                );
              })
            }
          </div>
          <button 
            className={`scrollArrow scrollArrowRight ${!canScrollRight ? 'hidden' : ''}`}
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
  )
}

export default SongBladeChannel;
