import scss from "./Header.module.scss"
import sealLogo from "../../../assets/logos/seal.png"
import { useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navTags = [
    {
      heading: "Home",
      line: "-"
    },
    {
      heading: "Prediction",
      line: "-"
    },
    {
      heading: "Facts",
      line: "-"
    },
    {
      heading: "History",
      line: "-"
    },
    {
      heading: "Materials",
      line: "-"
    },
    {
      heading: "Special Features",
      line: "-"
    },
    {
      heading: "Other Projects",
    },
  ]
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.left}>
            <img src={sealLogo} alt="Pennsylvania-Seal-Logo" />
            <div className={scss.heading}>
              <p>Pennsylvania</p>
              <div className={scss.border}></div>
            </div>
          </div>

          <div className={scss.center}>
            {navTags.map((e, index) => (
              <div className={scss.nav} key={index}>
                <p>{e?.heading}</p>
                <p>{e?.line}</p>
              </div>
            ))}
          </div>

          <div className={scss.right}>
            <p>About Us</p>
          </div>
        </div>

        <div className={scss.mini_content}>
          <>
            <div className={scss.heading}>
              <img src={sealLogo} alt="Pennsylvania-Seal-Logo" />
              <div className={scss.title}>
                <p>Pennsylvania</p>
                <div className={scss.border}></div>
              </div>
            </div>

            <div className={menuOpen ? scss.menu : scss.menu_no}>
              <div className={scss.scrollbox}>
                <div className={scss.scrollbox_inner}>

                  {navTags.map((e, index) => (
                    <div className={scss.nav} key={index}>
                      <p>{e?.heading}</p>
                      <p>{e?.line}</p>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            <div
              className={`${scss['nav-icon-5']} ${menuOpen ? scss.open : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        </div>
      </div>
    </header>
  )
}

export default Header