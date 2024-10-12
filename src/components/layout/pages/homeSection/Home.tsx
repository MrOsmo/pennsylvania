import scss from "./Home.module.scss"
import wallpaper from "../../../../assets/harrisAndTrump.png"
import { RefObject } from "react"

interface HomeProps {
  HomeRef: RefObject<any>
}

const Home: React.FC<HomeProps> = ({ HomeRef }) => {
  return (
    <section className={scss.home}>
      <div className={scss.main_container}>
      <div ref={HomeRef} className={scss.smooth}></div>
        <div className={scss.container}>
          <div className={scss.content}>
            <div className={scss.background}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <div className={scss.heading}>
                    <h1>Who will win the election 2024 in Pennsylvania? ⎯⎯⎯⎯⎯⎯</h1>
                  </div>

                  <p className={scss.description}>On this website you will find the latest predictions and facts for the 2024 elections in Pennsylvania, helping you to understand what is happening in the most important  states in America.</p>

                  <button>Discover</button>
                </div>

                <div className={scss.right}>
                  <img src={wallpaper} alt="Wallpaper" />
                </div>
              </div>
            </div>
            <div className={scss.reference_div}>
              <div className={scss.border}></div>
              <p className={scss.references}>
                References:
                <a target="_blank" href="https://pixabay.com/de/vectors/pennsylvania-zustand-siegel-norden-40430">Seal (in Header)</a>
                |
                <a target="_blank" href="https://pixabay.com/de/vectors/ai-generiert-frau-kamala-harris-9069971/">Harris</a>
                |
                <a target="_blank" href="https://pixabay.com/de/vectors/ai-generiert-donald-trump-präsident-9069949/">Trump</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home