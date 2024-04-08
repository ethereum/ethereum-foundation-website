import React from "react"

export const AnimationContext = React.createContext<any>(null)

export function useAnimationContext() {
  return React.useContext(AnimationContext)
}
