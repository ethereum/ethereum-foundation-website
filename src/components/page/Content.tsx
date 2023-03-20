'use client'
import React from 'react';
import css from './Content.module.scss';
import useScrollDirection, { ScrollDirection } from '../../utils/useScrollDirection';


export const pageContentID = 'page-content';

type ContentBlockProps = {
  isHomePage?: boolean,
  children?: React.ReactNode
}

const ContentBlock = (props: ContentBlockProps) => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <div id="transition-container">
        <p>One moment...</p>
      </div>

      <main
        id={scrollDirection === ScrollDirection.UP ? 'page-content-container' : 'page-content-container-visible'}
        // className={scrollDirection === ScrollDirection.UP ? 'page-content-animate' : 'page-content-animate.visible'}
        className={css['container']}
      >
        <div
          id={pageContentID}
          className={(() => {
            let className = css['content'];

            if (props.isHomePage) {
              className += ` homepage`;
            }

            return className;
          })()}
        >
          {props.children}
        </div>
      </main>

      <div id="canvas"></div>


    </>
  )
}

export default ContentBlock;