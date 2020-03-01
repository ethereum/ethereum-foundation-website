import React from "react"
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

// TODO move into layout
// depending on location, if not on homepage (i.e. on subpage), transition in the nav link home

const Image = styled(motion.img)`
  position: absolute;
  top: 20px;
  left: 40px;
  z-index: 20;
`

const StyledLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// TODO footer should "push up" the rest of the content (including constellation)
// How? Shrink height of TopLayout? Would need to be aware of if footer is open & change styling based on props
const TopLayout = styled.div`
  min-height: 100vh;
  position: relative;
`
const BottomLayout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Main = styled(motion.main)`
  padding-top: 8px;
`

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 1.0,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

const ImageNav = () => (
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

const Layout = ({ children }) => (
  <FullBackground>
    <StyledLayout>
      <TopLayout>
        <Location>
          {({ location }) => {
            return (
              <>
                {location.pathname !== "/" && <ImageNav />}
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
        <Footer />
      </BottomLayout>
    </StyledLayout>
  </FullBackground>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
