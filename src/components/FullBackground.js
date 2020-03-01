import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import FOG from "vanta/dist/vanta.fog.min"

const StyledFullBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FullBackground = props => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          highlightColor: 0xffe07b,
          midtoneColor: 0xf262bf,
          lowlightColor: 0x4ef79d,
          baseColor: 0xa2e8f2,
          blurFactor: 0.88,
          zoom: 0.2,
          mouseControls: true,
          touchControls: true,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <StyledFullBackground ref={myRef}>
      {props.children}
    </StyledFullBackground>
  )
}

export default FullBackground
