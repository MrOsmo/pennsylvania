import scss from "./OtherProject.module.scss"
import songVideo from "../../../../assets/projects/song.mp4"
import podcastAudio from "../../../../assets/projects/podcast.mp3"
import pennsylvaniaVideo from "../../../../assets/projects/pennsylvaniaVideo.mp4"
import pennsylvaniaVideoTwo from "../../../../assets/projects/pennsylvaniaVideoTwo.mp4"
import studioWallpaper from "../../../../assets/studio.jpg"
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
                  <video src={pennsylvaniaVideo} controls></video>
                </div>
              </div>

              <p className={scss.members_two}>© Leni H., Emilie, Leni K., Ilka</p>
            </div>

            <div className={scss.card}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <div className={scss.head}>
                    <h3>Group 3</h3>
                    <h2>Pennsylvania: Video 🗣️</h2>
                  </div>
                  <p>Watch the video in a TikTok-style blog, offering quick insights and highlights about Pennsylvania. It is a fun way to learn about the latest events!</p>
                </div>

                <div className={scss.right}>
                  <video src={pennsylvaniaVideoTwo} controls></video>
                </div>
              </div>

              <p className={scss.members}>© Lana, Kaija, Marlene, Amy, Viola, Luna</p>
            </div>

            <div className={scss.card_audio}>
              <div className={scss.sides_two}>
                <div className={scss.left}>
                  <div className={scss.head}>
                    <h3>Group 4</h3>
                    <h2>🎙️ Pennsylvania: Podcast</h2>
                  </div>
                  <p>Listen to the podcast about Pennsylvania, exploring various topics related to the state. It is a great way to stay informed and entertained with everything about Pennsylvania!</p>
                </div>

                <div className={scss.right}>
                  <img src={studioWallpaper} alt="Studio-Wallpaper" />
                  <audio src={podcastAudio} controls></audio>
                </div>
              </div>

              <p className={scss.members_two}>© Jannis, Silas</p>
            </div>
          </div>

          <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>
              References:
              <a target="_blank" href="https://pixabay.com/de/photos/laptop-konferenztisch-maus-arbeit-7978588/">Studio (Picture)</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherProject