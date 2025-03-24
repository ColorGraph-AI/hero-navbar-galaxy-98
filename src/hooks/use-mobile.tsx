
import * as React from "react"

// Increase breakpoint to 1200px to trigger mobile view earlier
const MOBILE_BREAKPOINT = 1200 // Increased from 1100px

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Use exact breakpoint in the media query
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", onChange)
    // Initialize with the current state
    setIsMobile(mql.matches)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
