import React from "react"
import css from "./Nav.module.scss"
import Link from "../Link"
import EFLogo from "assets/images/ef-logo.svg"
import HamburgerIcon from "assets/icons/hamburger.svg"

const Nav = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className={`${css["header"]} boundary`}>
        <div>
          <Link href="/" onClick={() => setOpen(false)}>
            <EFLogo
              className={(() => {
                let className = `${css["ef-logo"]}`

                if (open) {
                  className += ` ${css["open"]}`
                }

                return className
              })()}
            />
          </Link>

          <div
            className={(() => {
              let className = css["hamburger-menu"]

              if (open) {
                className += ` ${css["open"]}`
              }

              return className
            })()}
          >
            <HamburgerIcon onMouseDown={() => setOpen(!open)} />
          </div>
        </div>
      </div>

      <section
        className={`${css["main--menu--container"]} ${open ? css["open"] : ""}`}
        id="main--menu--container"
      >
        <div className={css["mask"]}>
          <div
            className={css["main--menu--internal--container"]}
            id="main--menu--internal--container"
          >
            <div className={`${css["menu--content--container"]}`}>
              <span className={`${css["one"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/"
                className={`${css["two"]} ${css["menu-content-text"]}`}
              >
                {" "}
                Home{" "}
              </Link>
              <span className={`${css["three"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/infinitegarden"
                className={`${css["four"]} ${css["menu-content-text"]}`}
              >
                {" "}
                Infinite Garden{" "}
              </Link>
              <span className={`${css["five"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/ethereum"
                className={`${css["six"]} ${css["menu-content-text"]}`}
              >
                {" "}
                What is Ethereum?{" "}
              </Link>
              <span className={`${css["seven"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/ef"
                className={`${css["eight"]} ${css["menu-content-text"]}`}
              >
                {" "}
                What is the EF?{" "}
              </Link>
              <span className={`${css["nine"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/ourstory"
                className={`${css["eight"]} ${css["menu-content-text"]}`}
              >
                {" "}
                Our Story{" "}
              </Link>
              <span className={`${css["nine"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/philosophy"
                className={`${css["ten"]} ${css["menu-content-text"]}`}
              >
                {" "}
                EF Philosophy{" "}
              </Link>
              <span className={`${css["ten"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
              <Link
                onClick={() => setOpen(false)}
                href="/silviculture-society"
                className={`${css["eleven"]} ${css["menu-content-text"]}`}
              >
                {" "}
                Silviculture Society{" "}
              </Link>
              <span className={`${css["eleven"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>
            </div>
            <div
              className={css["secondary--links--container"]}
              id="secondary--links--container"
            >
              <Link
                href="https://blog.ethereum.org/"
                id="ef--blog--link"
                target="_blank"
                rel="noopener noreferrer"
                className={css["main--menu--secondary--link"]}
              >
                {" "}
                EF Blog{" "}
              </Link>

              <span className={`${css["eleven"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>

              <Link
                prefetch={false}
                href="/report-2024.pdf"
                id="report--2024--link"
                target="_blank"
                rel="noopener noreferrer"
                className={css["main--menu--secondary--link"]}
              >
                {" "}
                EF Report 2024{" "}
              </Link>

              <span className={`${css["eleven"]} ${css["menu-content-dot"]}`}>
                {" "}
                •{" "}
              </span>

              <Link
                prefetch={false}
                href="/report-2022-04.pdf"
                id="report--2022--link"
                target="_blank"
                rel="noopener noreferrer"
                className={`${css["main--menu--secondary--link"]} ${css["main--menu--secondary--link--old"]}`}
              >
                {" "}
                EF Report 2022{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav
