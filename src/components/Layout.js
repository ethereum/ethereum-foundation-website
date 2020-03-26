import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

import Footer from "./Footer"
import Constellation from "./Constellation"

import "./layout.css"
import EFLogo from "../images/ethereum-logo.svg"
import HomeLogo from "../images/ethereum-foundation-logo.svg"
import { screenSizeS } from "../utils/styles"

const Image = styled(motion.img)`
  position: ${props => (props.isMobile ? `absolute` : `fixed`)};
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
  min-height: ${props => props.innerHeight};
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

const SubpageNav = ({ isMobile }) => {
  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link to="/">
        <Image
          isMobile={isMobile}
          src={EFLogo}
          alt="Ethereum Logo"
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        />
      </Link>
    </motion.nav>
  )
}

const Logo = styled(motion.img)`
  position: absolute;
  z-index: 20;
  top: calc(50% - 53px); /* 106px / 2 */
  left: calc(50% - 120px); /* 240px / 2 */
  transform: translate(-50, -55%);
  min-width: 240px;

  @media (max-width: ${screenSizeS}) {
    left: calc(50% - 100px);
  }
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFooterOpen: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
    this.setState({
      isFooterOpen: this.state.isFooterOpen,
      isMobile: document.documentElement.clientWidth < 780,
      innerHeight: `${window.innerHeight}px`,
    })
  }

  handleFooterToggle = () => {
    this.setState({ isFooterOpen: !this.state.isFooterOpen })
  }

  // If footer is open & user scrolls, close footer
  // This prevents inaccessiblity of nav on footerShiftY
  handleScroll = () => {
    if (this.state.isFooterOpen) {
      this.setState({ isFooterOpen: false })
    }
  }

  render() {
    const footerShiftY = this.state.isMobile ? -380 : -186

    return (
      <StyledLayout>
        <AnimatePresence>
          {this.props.path !== "/" && (
            <SubpageNav isMobile={this.state.isMobile} />
          )}
        </AnimatePresence>
        <TopLayout
          innerHeight={this.state.innerHeight}
          variants={{ normal: { y: 0 }, open: { y: footerShiftY } }}
          transition={{ duration: 0.8 }}
          initial="normal"
          animate={this.state.isFooterOpen ? "open" : "normal"}
        >
          <Constellation path={this.props.path} />
          <AnimatePresence>
            {this.props.path === "/" && (
              <Logo
                src={HomeLogo}
                alt="Ethereum Foundation Logo"
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              />
            )}
          </AnimatePresence>

          {/* TODO this is triggering UI "jumps" on constellation */}
          {/* Move contellation into the wrapPageElement? */}
          <AnimatePresence>
            <Main
              key={this.props.path}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {this.props.children}
            </Main>
          </AnimatePresence>
        </TopLayout>
        <BottomLayout>
          <Footer
            isOpen={this.state.isFooterOpen}
            toggleFooter={this.handleFooterToggle}
          />
        </BottomLayout>
      </StyledLayout>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout
