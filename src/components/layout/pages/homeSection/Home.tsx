import scss from "./Home.module.scss"
import wallpaper from "../../../../assets/trumpAndHarris.png"

const Home = () => {
  return (
    <section className={scss.home}>
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
              <a target="_blank" href="">Trump & Harris</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home