import scss from "./OtherProject.module.scss"
import testAudio from "../../../../assets/video/testAudio.mp3"
import testVideo from "../../../../assets/video/testVideo.mp4"
import songBackground from "../../../../assets/song.avif"

const OtherProject = () => {
  const groupOne = [
    {
      name: "Kadir"
    },
    {
      name: "Pauline"
    },
    {
      name: "Luna"
    },
    {
      name: "Johannes"
    },
    {
      name: "Benjamin"
    },
    {
      name: "Sofia"
    },
    {
      name: "Lennox"
    },
    {
      name: "Jan"
    },
    {
      name: "Merle"
    },
  ]

  const groupTwo = [
    {
      name: "Leni"
    },
    {
      name: "Emilie"
    },
    {
      name: "Ilka"
    },
    {
      name: "Lorem"
    },
    {
      name: "Lorem"
    },
  ]
  const groupThree = [
    {
      name: "Kaija"
    },
    {
      name: "Lorem"
    },
    {
      name: "Lorem"
    },
    {
      name: "Lorem"
    },
    {
      name: "Lorem"
    },
    {
      name: "Lorem"
    },
  ]

  const groupFour = [
    {
      name: "Nick"
    },
    {
      name: "Neele"
    },
    {
      name: "Samira"
    }
  ]
  return (
    <section className={scss.other_projects}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h1>OTHER PROJECTS</h1>
          <div className={scss.description}>
            <p>An overview of the various projects from the different groups in our course, compiled in one place for inspiration and discovery.</p>
          </div>

          <div className={scss.cards}>
            <div className={scss.card}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <h2>Song 🎶</h2>
                  <div className={scss.names}>
                    {groupOne.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>

                <div className={scss.right}>
                  <img src={songBackground} alt="SongBackground" />
                  <audio loop controls src={testAudio}></audio>
                </div>

              </div>
              <h3>Group 1</h3>
            </div>

            <div className={scss.card}>
              <div className={scss.sides}>

                <div className={scss.right}>
                  <video controls src={testVideo}></video>
                </div>

                <div className={scss.left}>
                  <h2>Video 🎥</h2>
                  <div className={scss.names}>
                    {groupTwo.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <h3>Group 2</h3>
            </div>

            <div className={scss.card}>
              <div className={scss.sides}>

                <div className={scss.left}>
                  <h2>Video 🎥</h2>
                  <div className={scss.names}>
                    {groupThree.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>

                <div className={scss.right}>
                  <video controls src={testVideo}></video>
                </div>
              </div>
              <h3>Group 3</h3>
            </div>

            <div className={scss.card}>
              <div className={scss.sides}>


                <div className={scss.right}>
                  <video controls src={testVideo}></video>
                </div>

                <div className={scss.left}>
                  <h2>Podcast 🎙️</h2>
                  <div className={scss.names}>
                    {groupFour.map((e, index) => (
                      <p key={index}>{e.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <h3>Group 4</h3>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherProject