'use client'
import { usePathname } from 'next/navigation';
import React, { useReducer } from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import animate from "../components/page/animate";
import useScrollDirection, { ScrollDirection } from '../utils/useScrollDirection';
import '../styles/global.scss'
import '../styles/reset.scss'

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  React.useEffect(() => {
    return animate(pathname);
  }, [pathname]);

  const scrollDirection = useScrollDirection();

  return (
    <html lang="en">
      <body id={pathname === "/" ? 'home' : ''} className={scrollDirection === ScrollDirection.UP ? '' : 'content-scrolled'}>
        {children}
        <Nav />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;