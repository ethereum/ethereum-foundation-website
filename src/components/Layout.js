import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import StyledFullBackground from "./FullBackground"
import Constellation from "./Constellation"
import Footer from "./Footer"

import "./layout.css"

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

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children }) => (
  <StyledFullBackground>
    <StyledLayout>
      <TopLayout>
        <Constellation />
        <AnimatePresence>
          <Main
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </Main>
        </AnimatePresence>
      </TopLayout>
      <BottomLayout>
        <Footer />
      </BottomLayout>
    </StyledLayout>
  </StyledFullBackground>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
