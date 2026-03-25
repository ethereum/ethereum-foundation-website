import React, { useEffect, useRef, useState } from "react"
import css from "./SilvicultureSociety.module.scss"
import Link from "next/link"
import Image from "next/image"

interface SilvicultureMember {
  id: number
  name: string
  avatar: string
  link: string
  style?: React.CSSProperties
}

// Members data with actual names
const members: SilvicultureMember[] = [
  {
    id: 11,
    name: "vectorized",
    avatar: "/assets/silviculture/optimizoor.jpg",
    link: "https://twitter.com/optimizoor",
  },
  {
    id: 12,
    name: "LefterisJP",
    avatar: "/assets/silviculture/LefterisJP.jpg",
    link: "https://twitter.com/LefterisJP",
  },
  {
    id: 13,
    name: "pcaversaccio",
    avatar: "/assets/silviculture/pcaversaccio.jpg",
    link: "https://twitter.com/pcaversaccio",
  },
  {
    id: 14,
    name: "Dr. Paul Dylan-Ennis",
    avatar: "/assets/silviculture/post_polar_.jpg",
    link: "https://twitter.com/post_polar_",
    style: {
      right: "15px",
    },
  },
  {
    id: 15,
    name: "mashbean",
    avatar: "/assets/silviculture/mashbean.jpg",
    link: "https://twitter.com/mashbean",
  },
  {
    id: 1,
    name: "Yu Guo",
    avatar: "/assets/silviculture/1dot2.jpg",
    link: "https://twitter.com/1dot2",
  },
  {
    id: 2,
    name: "kassandra.eth",
    avatar: "/assets/silviculture/kassandraETH.jpg",
    link: "https://twitter.com/kassandraETH",
    style: {
      left: "10px",
    },
  },
  {
    id: 3,
    name: "J. Zawistowski",
    avatar: "/assets/silviculture/julianzawist.jpg",
    link: "https://twitter.com/julianzawist",
    style: {
      left: "10px",
    },
  },
  {
    id: 4,
    name: "alpeh_v",
    avatar: "/assets/silviculture/alpeh_v.jpg",
    link: "https://twitter.com/alpeh_v",
    style: {
      right: "10px",
    },
  },
  {
    id: 5,
    name: "Millie",
    avatar: "/assets/silviculture/llamaonthebrink.jpg",
    link: "https://twitter.com/llamaonthebrink",
  },
  {
    id: 6,
    name: "Tim Clancy",
    avatar: "/assets/silviculture/_Enoch.jpg",
    link: "https://twitter.com/_Enoch",
    style: {
      right: "10px",
    },
  },
  {
    id: 7,
    name: "Matthew Green",
    avatar: "/assets/silviculture/matthew_d_green.jpg",
    link: "https://twitter.com/matthew_d_green",
    style: {
      left: "10px",
    },
  },
  {
    id: 8,
    name: "Fatalmeh",
    avatar: "/assets/silviculture/Fatalmeh.jpg",
    link: "https://twitter.com/Fatalmeh",
  },
  {
    id: 9,
    name: "ml_sudo",
    avatar: "/assets/silviculture/ml_sudo.jpg",
    link: "https://twitter.com/ml_sudo",
  },
  {
    id: 10,
    name: "dystopiabreaker",
    avatar: "/assets/silviculture/dystopiabreaker.jpg",
    link: "https://twitter.com/dystopiabreaker",
    style: {
      left: "15px",
    },
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
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
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
      const angle = (index / members.length) * 2 * Math.PI - Math.PI / 2
      const x = centerX + circleRadius * Math.cos(angle)
      const y = centerY + circleRadius * Math.sin(angle)

      return {
        ...member,
        position: { x, y },
      }
    })
  }

  const profilesWithPositions = calculatePositions()

  return (
    <div className={css["silviculture-wrapper"]}>
      <h3 className={css["members-heading"]}>Members</h3>
      
      {/* Circle view (desktop) */}
      <div className={css["silviculture-container"]}>
        <div ref={containerRef} className={css["silviculture-society-circle"]}>
          {profilesWithPositions.map((profile) => (
            <div
              key={profile.id}
              className={css["member-position"]}
              style={{
                top: profile.position.y,
                left: profile.position.x,
              }}
            >
              <Link href={profile.link} className={css["member-link"]}>
                <div className={css["member-avatar"]}>
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name}'s avatar`}
                    width={100}
                    height={100}
                    className={css["avatar-image"]}
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                <span className={css["member-name"]} style={profile.style}>
                  {profile.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* List view (mobile) */}
      <div className={css["silviculture-container-list"]}>
        <div className={css["silviculture-society-list"]}>
          {members.map((profile) => (
            <div key={profile.id} className={css["member-item"]}>
              <Link href={profile.link} className={css["member-link-list"]}>
                <div className={css["member-avatar"]}>
                  <Image
                    src={profile.avatar}
                    alt={`${profile.name}'s avatar`}
                    width={100}
                    height={100}
                    className={css["avatar-image"]}
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                <span className={css["member-name-list"]} style={profile.style}>
                  {profile.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SilvicultureSociety
