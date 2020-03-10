import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"
import { Location } from "@reach/router"

import FullBackground from "./FullBackground"
import Constellation from "./Constellation"
import Footer from "./Footer"

import "./layout.css"
import EFLogo from "../images/ethereum-logo.svg"

const Image = styled(motion.img)`
  position: absolute;
  z-index: 20;
  top: 20px;
  left: 40px;
`

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopLayout = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`

const BottomLayout = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 0;
  width: 100%;
`

const Main = styled(motion.main)`
  position: relative;
  z-index: 20;
  min-height: 100vh;
`

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.0,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
}

const SubpageNav = () => (
  <nav>
    <Link to="/">
      <Image
        src={EFLogo}
        alt="Ethereum Logo"
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
      />
    </Link>
  </nav>
)

const Layout = ({ children }) => {
  const [layoutState, setLayoutState] = useState({
    isFooterOpen: false,
  })

  useEffect(() => {
    setLayoutState({
      isFooterOpen: layoutState.isFooterOpen,
      clientWidth: document.documentElement.clientWidth,
    })
  }, [layoutState.isFooterOpen])

  const footerShiftY = layoutState.clientWidth < 780 ? -380 : -186

  return (
    <FullBackground>
      <StyledLayout>
        <TopLayout
          variants={{ normal: { y: 0 }, open: { y: footerShiftY } }}
          transition={{ duration: 1 }}
          initial="normal"
          animate={layoutState.isFooterOpen ? "open" : "normal"}
        >
          <Location>
            {({ location }) => {
              return (
                <>
                  {location.pathname !== "/" && <SubpageNav />}
                  <Constellation path={location.pathname} />
                  <AnimatePresence>
                    <Main
                      key={location.pathname}
                      variants={variants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      {children}
                    </Main>
                  </AnimatePresence>
                </>
              )
            }}
          </Location>
        </TopLayout>
        <BottomLayout>
          <Footer
            isOpen={layoutState.isFooterOpen}
            clientWidth={layoutState.clientWidth}
            setLayoutState={setLayoutState}
          />
        </BottomLayout>
      </StyledLayout>
    </FullBackground>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
