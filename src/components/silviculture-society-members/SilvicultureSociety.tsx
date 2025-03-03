import React from "react"
import css from "./SilvicultureSociety.module.scss"
import Link from "next/link"
import Image from "next/image"

// Define member type for better type safety
interface SilvicultureMember {
  id: number
  name: string
  avatar: string
  link: string
}

// Sample members data (you can move this to a separate data file later)
const members: SilvicultureMember[] = [
  {
    id: 1,
    name: "Member 1",
    // TODO: Add avatar images
    // avatar: "/assets/silviculture-society/members/avatar-1.jpg",
    avatar: "/assets/ourstory-1.jpg",
    link: "/member-1",
  },
  {
    id: 2,
    name: "Member 2",
    avatar: "/assets/ourstory-2.jpg",
    link: "/member-2",
  },
  {
    id: 3,
    name: "Member 3",
    avatar: "/assets/ourstory-3.jpg",
    link: "/member-3",
  },
  {
    id: 4,
    name: "Member 4",
    avatar: "/assets/ourstory-4.jpg",
    link: "/member-4",
  },
  {
    id: 5,
    name: "Member 5",
    avatar: "/assets/ourstory-1.jpg",
    link: "/member-5",
  },
  {
    id: 6,
    name: "Member 6",
    avatar: "/assets/ourstory-2.jpg",
    link: "/member-6",
  },
  {
    id: 7,
    name: "Member 7",
    avatar: "/assets/ourstory-3.jpg",
    link: "/member-7",
  },
  {
    id: 8,
    name: "Member 8",
    avatar: "/assets/ourstory-4.jpg",
    link: "/member-8",
  },
  {
    id: 9,
    name: "Member 9",
    avatar: "/assets/ourstory-1.jpg",
    link: "/member-9",
  },
  {
    id: 10,
    name: "Member 10",
    avatar: "/assets/ourstory-2.jpg",
    link: "/member-10",
  },
  {
    id: 11,
    name: "Member 11",
    avatar: "/assets/ourstory-3.jpg",
    link: "/member-11",
  },
  {
    id: 12,
    name: "Member 12",
    avatar: "/assets/ourstory-4.jpg",
    link: "/member-12",
  },
  {
    id: 13,
    name: "Member 13",
    avatar: "/assets/ourstory-1.jpg",
    link: "/member-13",
  },
  {
    id: 14,
    name: "Member 14",
    avatar: "/assets/ourstory-2.jpg",
    link: "/member-14",
  },
  {
    id: 15,
    name: "Member 15",
    avatar: "/assets/ourstory-3.jpg",
    link: "/member-15",
  },
]
// ... existing imports and interfaces ...

const SilvicultureSociety = () => {
  return (
    <div className={css["silviculture-container"]}>
      <ul className={css["silviculture-society"]}>
        {members.map((member, index) => {
          const rotation = (360 / members.length) * index - 90
          const style = {
            "--rotation": `${rotation}deg`,
            "--counter-rotation": `${rotation * -1}deg`,
          } as React.CSSProperties

          return (
            <li key={member.id} className={css["member-item"]} style={style}>
              <div className={css["member-content"]}>
                <Link href={member.link} className={css["member-link"]}>
                  <div className={css["member-avatar"]}>
                    <Image
                      src={member.avatar}
                      alt={`${member.name}'s avatar`}
                      width={100}
                      height={100}
                      className={css["avatar-image"]}
                      style={{ aspectRatio: "1/1" }}
                    />
                  </div>
                  <span className={css["member-name"]}>{member.name}</span>
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SilvicultureSociety
