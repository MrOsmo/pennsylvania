import scss from "./OtherProject.module.scss"
import testVideo from "../../../../assets/video/testVideo.mp4"
import songVideo from "../../../../assets/projects/song.mp4"
import React, { RefObject } from "react"

interface OtherProjectsProps {
  OtherProjectsRef: RefObject<any>
}

const OtherProject: React.FC<OtherProjectsProps> = ({ OtherProjectsRef }) => {
  return (
    <section className={scss.other_projects}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={OtherProjectsRef} className={scss.smooth}></div>
          <h1>OTHER PROJECTS</h1>
          <div className={scss.description}>
            <p>An overview of the various projects from the different groups in our course, compiled in one place for inspiration and discovery.</p>
          </div>

          <div className={scss.cards}>
            <div className={scss.card}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <div className={scss.head}>
                    <h3>Group 1</h3>
                    <h2>Pennsylvania: Song 🎶</h2>
                  </div>
                  <p>This song is all about Pennsylvania, showing how breathtaking and unique the state is. With great melodies and powerful lyrics, it takes you on a journey through its beauty. Let the music inspire you and feel the spirit of Pennsylvania.</p>
                </div>

                <div className={scss.right}>
                  <video src={songVideo} controls></video>
                </div>
              </div>

              <p className={scss.members}>© Pauline, Kadir, Johannes, Luna, Benjamin, Sofia, Jan, Lennox, Merle</p>
            </div>

            <div className={scss.card}>
              <div className={scss.sides_two}>
                <div className={scss.left}>
                  <div className={scss.head}>
                    <h3>Group 2</h3>
                    <h2>🎥 Pennsylvania: Video</h2>
                  </div>
                  <p>This video shows how beautiful and unique Pennsylvania is. With amazing visuals, it takes you on a journey through the state. Watch and be inspired by the beauty of Pennsylvania.</p>
                </div>

                <div className={scss.right}>
                  <video src={testVideo} controls></video>
                </div>
              </div>

              <p className={scss.members_two}>© Leni, Emilie, Leni, Ilka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherProject