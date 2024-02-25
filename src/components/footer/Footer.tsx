import React from "react"
import MouseDownLink from "../MouseDownLink"
import css from "./Footer.module.scss"
import EFLogo from "assets/images/ef-logo.svg"
import Chevron from "assets/icons/chevron.svg"

const Footer = () => {
  const [open, setOpen] = React.useState(true)

  let className = css["container"]

  if (open) className += ` ${css["open"]}`

  return (
    <>
      <div className={css["scroll-indicator"]} id="scroll-indicator">
        <p className={css["text"]}>
          <span className={css["click-text"]}>
            Scroll down or click here <br />
            to begin
          </span>
          <span className={css["hover-text"]}>
            Swipe up or tap here <br /> to begin
          </span>
        </p>
        <svg
          width="37"
          height="37"
          className={css["arrow"]}
          viewBox="0 0 52 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V15.0485L24.7939 36.6918V21.6433L0 0Z" fill="#36364C" />
          <path
            d="M52.0001 0L27.2062 21.6433V36.6904L52.0001 15.0485V0Z"
            fill="#36364C"
          />
          <path
            d="M26 42.1213L0 19.4269V23.0344L26 45.7301L52 23.0357V19.4269L26 42.1213Z"
            fill="#36364C"
          />
        </svg>
      </div>

      <footer
        className={className}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className={css["content"]}>
          <div className={css["trigger"]} onTouchStart={() => setOpen(!open)}>
            <p className={css["copyright"]}>
              &copy; Ethereum Foundation, {new Date().getFullYear()}
            </p>

            <Chevron className={css["chevron"]} />
          </div>

          <div className={css["unfold"]}>
            <div className={css["scroll-wrapper"]}>
              <div className={css["direction-wrapper"]}>
                <div className={css["meta"]}>
                  <EFLogo className={css["logo"]} />

                  <div className={css["links"]}>
                    <MouseDownLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://devcon.org/"
                      className={css["link"]}
                    >
                      Devcon
                    </MouseDownLink>
                    <div className={css["separator"]}>:</div>
                    <MouseDownLink
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://blog.ethereum.org/"
                      className={css["link"]}
                    >
                      Blog
                    </MouseDownLink>
                    <div className={css["break"]}>
                      <MouseDownLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ethereum.org/en/terms-of-use/"
                        className={css["link"]}
                      >
                        Terms of Use
                      </MouseDownLink>
                      <div className={css["separator"]}>:</div>
                      <MouseDownLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ethereum.org/en/privacy-policy/"
                        className={css["link"]}
                      >
                        Privacy Policy
                      </MouseDownLink>
                      <div className={css["separator"]}>:</div>
                      <MouseDownLink
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ethereum.org/en/cookie-policy/"
                        className={css["link"]}
                      >
                        Cookie Policy
                      </MouseDownLink>
                    </div>
                  </div>
                </div>

                <div className={css["contacts"]}>
                  <div>
                    <h4 className={css["title"]}>General Contact</h4>
                    <MouseDownLink
                      href="mailto:info@ethereum.org?subject=Hello"
                      className={css["email"]}
                    >
                      info@ethereum.org
                    </MouseDownLink>
                  </div>
                  <div>
                    <h4 className={css["title"]}>Press Contact</h4>
                    <MouseDownLink
                      href="mailto:press@ethereum.org?subject=Hello"
                      className={css["email"]}
                    >
                      press@ethereum.org
                    </MouseDownLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
