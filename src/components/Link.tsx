import React from "react"
import NextLink, { LinkProps } from "next/link"

const Link = React.forwardRef(
  (
    props: LinkProps & { children?: React.ReactNode; [key: string]: any },
    ref: any
  ) => {
    const href = props.href.toString()
    const isMailTo = href.startsWith("mailto:")

    if (isMailTo) {
      return (
        <a href={href} ref={ref} className={props.className}>
          {props.children}
        </a>
      )
    }

    // Detects fully qualified domain name
    const isExternal = href.match(/^([a-z0-9]*:|.{0})\/\/.*$/)

    if (isExternal) {
      return (
        <NextLink
          href={href}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          className={props.className}
        >
          {props.children}
        </NextLink>
      )
    }

    return <NextLink {...props}>{props.children}</NextLink>
  }
)

Link.displayName = "LinkComponent"

export default Link
