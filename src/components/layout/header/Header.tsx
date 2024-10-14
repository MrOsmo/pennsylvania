import scss from "./Header.module.scss"
import sealLogo from "../../../assets/logos/seal.png"
import { RefObject, useState } from "react"

interface HeaderProps {
  HomeRef: RefObject<any | null>;
  PredictionsRef: RefObject<any | null>;
  FactsRef: RefObject<any | null>;
  HistoryRef: RefObject<any | null>;
  MaterialsRef: RefObject<any | null>;
  SpecialFeaturesRef: RefObject<any | null>;
  OtherProjectsRef: RefObject<any | null>;
  AboutUsRef: RefObject<any | null>;
}

const Header: React.FC<HeaderProps> = ({ HomeRef, PredictionsRef, FactsRef, HistoryRef, MaterialsRef, SpecialFeaturesRef, OtherProjectsRef, AboutUsRef }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navTags = [
    {
      heading: "Home",
      line: "-",
      ref: HomeRef
    },
    {
      heading: "Prediction",
      line: "-",
      ref: PredictionsRef
    },
    {
      heading: "Facts",
      line: "-",
      ref: FactsRef
    },
    {
      heading: "History",
      line: "-",
      ref: HistoryRef
    },
    {
      heading: "Materials",
      line: "-",
      ref: MaterialsRef
    },
    {
      heading: "Special Features",
      line: "-",
      ref: SpecialFeaturesRef
    },
    {
      heading: "Other Projects",
      ref: OtherProjectsRef
    },
  ]

  const miniNavTags = [
    {
      heading: "Home",
      ref: HomeRef
    },
    {
      heading: "Prediction",
      ref: PredictionsRef
    },
    {
      heading: "Facts",
      ref: FactsRef
    },
    {
      heading: "History",
      ref: HistoryRef
    },
    {
      heading: "Materials",
      ref: MaterialsRef
    },
    {
      heading: "Special Features",
      ref: SpecialFeaturesRef
    },
    {
      heading: "Other Projects",
      ref: OtherProjectsRef
    },
    {
      heading: "About Us",
      ref: AboutUsRef
    },
  ]
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div onClick={() =>
            HomeRef.current.scrollIntoView({
              behavior: "smooth"
            })}
            className={scss.left}>
            <img src={sealLogo} alt="Pennsylvania-Seal-Logo" />
            <div className={scss.heading}>
              <p>Pennsylvania</p>
              <div className={scss.border}></div>
            </div>
          </div>

          <div className={scss.center}>
            {navTags.map((e, index) => (
              <div className={scss.nav} key={index}>
                <p onClick={() =>
                  e?.ref.current.scrollIntoView({ behavior: "smooth" })
                } className={scss.nav_heading}>{e?.heading}</p>
                <p>{e?.line}</p>
              </div>
            ))}
          </div>

          <div className={scss.right}>
            <p onClick={() =>
              AboutUsRef.current.scrollIntoView({ behavior: "smooth" })
            }>About Us</p>
          </div>
        </div>

        <div className={scss.mini_content}>
          <>
            <div onClick={() =>
                HomeRef.current.scrollIntoView({ behavior: "smooth" })
              } className={scss.heading}>
              <img src={sealLogo} alt="Pennsylvania-Seal-Logo" />
              <div className={scss.title}>
                <p>Pennsylvania</p>
                <div className={scss.border}></div>
              </div>
            </div>

            <div className={menuOpen ? scss.menu : scss.menu_no}>
              <div className={scss.scrollbox}>
                <div className={scss.scrollbox_inner}>

                  <h2>- Pennsylvania -</h2>
                  <div className={scss.border}></div>

                  <div className={scss.nav_div}>
                    {miniNavTags.map((e, index) => (
                      <div onClick={() =>
                        e?.ref.current.scrollIntoView({ behavior: "smooth" })
                      } className={scss.nav} key={index}>
                        <p>{e?.heading}</p>
                      </div>
                    ))}
                  </div>

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