import scss from "./Material.module.scss"
import React, { RefObject } from "react"
import pennsylvaniaVideo from "../../../../assets/projects/pennsylvaniaVideoThree.mp4"

interface MaterialProps {
  MaterialsRef: RefObject<any>
}

const Material: React.FC<MaterialProps> = ({ MaterialsRef }) => {
  return (
    <section className={scss.material}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={MaterialsRef} className={scss.smooth}></div>
          <h1>MATERIALS</h1>
          <div className={scss.description}>
            <p>Watch the video to hear our analysis on who we believe will win the election and the reasons behind our prediction.</p>
          </div>

          <video src={pennsylvaniaVideo} controls></video>


        </div>
      </div>
    </section>
  )
}

export default Material