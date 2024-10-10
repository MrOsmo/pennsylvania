import scss from "./Material.module.scss"
import test from "../../../../assets/video/testVideo.mp4"

const Material = () => {
  return (
    <section className={scss.material}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>MATERIALS</h1>
          <div className={scss.description}>
            <p>Watch the video to hear our analysis on who we believe will win the election and the reasons behind our prediction.</p>
          </div>

          <video src={test} controls></video>

          {/* <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>
              References:
              <a target="_blank" href="https://www.youtube.com/watch?v=aqz-KE-bpKQ">Video</a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Material