import React from 'react';
import { pageContentID } from 'components/page/Content';

export enum ScrollDirection {
  UP = 'up',
  DOWN = 'down'
}

let xDown = 0;
let yDown = 0;

const checkIsContentScrolled = () => {
  const scrollableContentElement = document.getElementById(pageContentID)
      
  if (!scrollableContentElement) return false;

  return scrollableContentElement?.scrollTop > 0;
}

function getTouches(event: any) {
    return event.touches || event.originalEvent.touches;
}

// TODO: Should probably rethink this and make it more "reacty" - e.g. use a gesture library and apply the listeners to the components that need them directly rather than using window listeners
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(ScrollDirection.UP);

  React.useEffect(() => {
    const handleScroll = (e: any) => {
      const scrolledDown = e.deltaY > 0;
      const direction = scrolledDown ? ScrollDirection.DOWN : ScrollDirection.UP;

      const isContentScrolled = checkIsContentScrolled();
      
      if (isContentScrolled) {
        setScrollDirection(ScrollDirection.DOWN);
      } else {
        setScrollDirection(direction);
      }
    }

    const handleTouchStart = (e: any) => {
      const firstTouch = getTouches(e)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    const handleTouchMove = (e: any) => {
      // if (!xDown || !yDown) {
      //     return;
      // }

      var xUp = e.touches[0].clientX;
      var yUp = e.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
              // Right swipe
          } else {
              // Left swipe
          }
      } else {
        const isContentScrolled = checkIsContentScrolled();

        if (isContentScrolled || yDiff > 0) {
          setScrollDirection(ScrollDirection.DOWN);
        } else {
          setScrollDirection(ScrollDirection.UP);
        }
      }
    }

    window.addEventListener('wheel', handleScroll)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return scrollDirection;
}


export default useScrollDirection;