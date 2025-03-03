import React, { useState, useEffect, useRef } from "react"
import css from "./SilvicultureSociety.module.scss"
import Link from "next/link"
import Image from "next/image"

interface SilvicultureMember {
  id: number
  name: string
  avatar: string
  link: string
}

// Members data with actual names
const members: SilvicultureMember[] = [
  {
    id: 1,
    name: "Yu Guo",
    avatar: "/assets/ourstory-1.jpg",
    link: "https://twitter.com/1dot2",
  },
  {
    id: 2,
    name: "kassandra.eth",
    avatar: "/assets/ourstory-2.jpg",
    link: "https://twitter.com/kassandraETH",
  },
  {
    id: 3,
    name: "Millie",
    avatar: "/assets/ourstory-3.jpg",
    link: "https://twitter.com/llamaonthebrink",
  },
  {
    id: 4,
    name: "alpeh_v",
    avatar: "/assets/ourstory-4.jpg",
    link: "https://twitter.com/alpeh_v",
  },
  {
    id: 5,
    name: "Julian Zawistowski",
    avatar: "/assets/ourstory-1.jpg",
    link: "https://twitter.com/julianzawist",
  },
  {
    id: 6,
    name: "Tim Clancy",
    avatar: "/assets/ourstory-2.jpg",
    link: "https://twitter.com/_Enoch",
  },
  {
    id: 7,
    name: "Matthew Green",
    avatar: "/assets/ourstory-3.jpg",
    link: "https://twitter.com/matthew_d_green",
  },
  {
    id: 8,
    name: "Fatalmeh",
    avatar: "/assets/ourstory-4.jpg",
    link: "https://twitter.com/Fatalmeh",
  },
  {
    id: 9,
    name: "ml_sudo",
    avatar: "/assets/ourstory-1.jpg",
    link: "https://twitter.com/ml_sudo",
  },
  {
    id: 10,
    name: "dystopiabreaker",
    avatar: "/assets/ourstory-2.jpg",
    link: "https://twitter.com/dystopiabreaker",
  },
  {
    id: 11,
    name: "vectorized",
    avatar: "/assets/ourstory-3.jpg",
    link: "https://twitter.com/optimizoor",
  },
  {
    id: 12,
    name: "Dr. Paul Dylan-Ennis",
    avatar: "/assets/ourstory-4.jpg",
    link: "https://twitter.com/post_polar_",
  },
  {
    id: 13,
    name: "pcaversaccio",
    avatar: "/assets/ourstory-1.jpg",
    link: "https://twitter.com/pcaversaccio",
  },
  {
    id: 14,
    name: "LefterisJP",
    avatar: "/assets/ourstory-2.jpg",
    link: "https://twitter.com/LefterisJP",
  },
  {
    id: 15,
    name: "mashbean",
    avatar: "/assets/ourstory-3.jpg",
    link: "https://twitter.com/mashbean",
  },
]

const SilvicultureSociety = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setSize({
          width: rect.width,
          height: rect.width, // Use width for both to maintain aspect ratio
        })
      }
    }

    // Initial size calculation
    updateSize()
    
    // Update on resize
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Calculate positions on a perfect circle
  const calculatePositions = () => {
    if (size.width === 0) return []
    
    // Use fixed radius based on container size
    const circleRadius = (size.width / 2) * 0.8 // 80% of half width
    const centerX = size.width / 2
    const centerY = size.width / 2 // Use width to maintain perfect circle
    
    return members.map((member, index) => {
      // Start from the top (- Math.PI/2) and go clockwise
      const angle = (index / members.length) * 2 * Math.PI - Math.PI/2
      const x = centerX + circleRadius * Math.cos(angle)
      const y = centerY + circleRadius * Math.sin(angle)
      
      return {
        ...member,
        position: { x, y }
      }
    })
  }

  const profilesWithPositions = calculatePositions()
  const showNames = size.width >= 480

  return (
    <div 
      ref={containerRef}
      className={css["silviculture-container"]}
    >
      <div className={css["silviculture-society-circle"]}>
        {profilesWithPositions.map((profile) => {
          // Fixed size for avatars
          const imageSize = 50 // Use consistent size
          
          return (
            <div
              key={profile.id}
              className={css["member-position"]}
              style={{
                top: profile.position.y,
                left: profile.position.x,
              }}
            >
              <Link href={profile.link} className={css["member-link"]}>
                <div 
                  className={css["member-avatar"]}
                  style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
                >
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name}'s avatar`}
                    width={100}
                    height={100}
                    className={css["avatar-image"]}
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                {showNames && (
                  <span className={css["member-name"]}>{profile.name}</span>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SilvicultureSociety
