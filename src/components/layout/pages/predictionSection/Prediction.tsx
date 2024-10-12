import React, { RefObject, useEffect, useState } from "react"
import scss from "./Prediction.module.scss"
import harris from "../../../../assets/candidates/harris.jpg"
import trump from "../../../../assets/candidates/trump.jpg"

interface PredictionProps {
  PredictionsRef: RefObject<any>
}

const Prediction: React.FC<PredictionProps> = ({ PredictionsRef }) => {
  const [harrisActive, setHarrisActive] = useState(true)

  const [generalActive, setGeneralActive] = useState(true)
  const [historyActive, setHistoryActive] = useState(false)
  const [opinionActive, setopinionActive] = useState(false)

  useEffect(() => {
    if (!harrisActive) {
      setGeneralActive(true)
      setHistoryActive(false)
      setopinionActive(false)
    } else if (harrisActive) {
      setGeneralActive(true)
      setHistoryActive(false)
      setopinionActive(false)
    }
  }, [harrisActive])

  return (
    <section className={scss.prediction}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={PredictionsRef} className={scss.smooth}></div>
          <h1 >PREDICTIONS</h1>
          <div className={scss.description}>
            <p>Get a closer look at the 2024 election candidates — Kamala Harris and Donald Trump. Learn about their backgrounds, their history in politics, and read our opinions on who has the best chance to win this important race.</p>
          </div>

          <div className={scss.candidates}>
            <div onClick={() => setHarrisActive(true)} className={harrisActive ? scss.harris_active : scss.harris_not}>
              <h2 className={scss.active}>Harris</h2>
            </div>
            <div onClick={() => setHarrisActive(false)} className={harrisActive ? scss.trump_not : scss.trump_active}>
              <h2 className={scss.active}>Trump</h2>
            </div>
          </div>

          {harrisActive ? (
            <div className={scss.candidates_about}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <img src={harris} alt="Harris" />
                </div>
                <div className={scss.right}>
                  <div className={scss.right_nav}>
                    <div
                      className={generalActive ? scss.general : scss.not_general}
                      onClick={
                        () => {
                          setGeneralActive(true);
                          setHistoryActive(false);
                          setopinionActive(false);
                        }
                      }
                    >
                      <h2>General</h2>
                      <div className={scss.line}></div>
                    </div>
                    <div
                      className={historyActive ? scss.history : scss.not_history}
                      onClick={
                        () => {
                          setGeneralActive(false);
                          setHistoryActive(true);
                          setopinionActive(false);
                        }
                      }
                    >
                      <h2>History</h2>
                      <div className={scss.line}></div>
                    </div>
                    <div
                      className={opinionActive ? scss.opinion : scss.not_opinion}
                      onClick={
                        () => {
                          setGeneralActive(false);
                          setHistoryActive(false);
                          setopinionActive(true);
                        }
                      }
                    >
                      <h2>Our view</h2>
                      <div className={scss.line}></div>
                    </div>
                  </div>

                  {generalActive && (
                    <div className={scss.personal_details}>

                      <div className={scss.line}></div>

                      <h2>Candidate: <span>Kamala Devi Harris</span></h2>

                      <div className={scss.line}></div>

                      <h2>Born: <span>October 20, 1964</span></h2>

                      <div className={scss.line}></div>

                      <h2>Title: <span>vice president of the United States of America (2021-), United States Senate (2017-2021)</span></h2>

                      <div className={scss.line}></div>

                      <h2>Political Party: <span>Democratic Party</span></h2>

                      <div className={scss.line}></div>

                      <h2>Family Members: <span>spouse Doug Emhoff, daughter of Donald Harris, daughter of Shyamala Gopalan, married to Douglas Emhoff (2014-present), stepmother of Ella Emhoff, stepmother of Cole Emhoff, sister of Maya Harris</span></h2>

                      <div className={scss.line}></div>

                    </div>
                  )}

                  {historyActive && (
                    <div className={scss.history_details}>
                      <p>Kamala Harris served as the attorney general of California from 2011 to 2017. She then became a U.S. Senator from 2017 to 2021. In 2021, she became the 49th vice president of the United States under President Joe Biden. In 2024, after Biden struggled in a debate, he decided not to run for reelection and endorsed Harris as the Democratic nominee for the presidency. She officially became the Democratic Party’s presidential nominee in August 2024.</p>
                    </div>
                  )}

                  {opinionActive && (
                    <div className={scss.opinion_details}>
                      <p>We believe that Harris will win the upcoming election. She has strong experience and leadership, and many people support her. With important endorsements and a loyal following, we think she has a good chance to win and guide the country in a positive direction.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={scss.candidates_about}>
              <div className={scss.sides}>
                <div className={scss.left}>
                  <img src={trump} alt="Trump" />
                </div>
                <div className={scss.right}>
                  <div className={scss.right_nav}>
                    <div
                      className={generalActive ? scss.general : scss.not_general}
                      onClick={
                        () => {
                          setGeneralActive(true);
                          setHistoryActive(false);
                          setopinionActive(false);
                        }
                      }
                    >
                      <h2>General</h2>
                      <div className={scss.line}></div>
                    </div>
                    <div
                      className={historyActive ? scss.history : scss.not_history}
                      onClick={
                        () => {
                          setGeneralActive(false);
                          setHistoryActive(true);
                          setopinionActive(false);
                        }
                      }
                    >
                      <h2>History</h2>
                      <div className={scss.line}></div>
                    </div>
                    <div
                      className={opinionActive ? scss.opinion : scss.not_opinion}
                      onClick={
                        () => {
                          setGeneralActive(false);
                          setHistoryActive(false);
                          setopinionActive(true);
                        }
                      }
                    >
                      <h2>Our view</h2>
                      <div className={scss.line}></div>
                    </div>
                  </div>

                  {generalActive && (
                    <div className={scss.personal_details}>

                      <div className={scss.line}></div>

                      <h2>Candidate: <span>Donald John Trump</span></h2>

                      <div className={scss.line}></div>

                      <h2>Born: <span>June 14, 1946</span></h2>

                      <div className={scss.line}></div>

                      <h2>Title: <span>presidency of the United States of America (2017-2021)</span></h2>

                      <div className={scss.line}></div>

                      <h2>Political Party: <span>Republican Party</span></h2>

                      <div className={scss.line}></div>

                      <h2>Family Members: <span>spouse Melania Trump, daughter Ivanka Trump, son Donald Trump, Jr. son of Frederick Christ Trump, son of Mary MacLeod, husband of Melania Trump (January 22, 2005–present), husband of Marla Maples and more...</span></h2>

                      <div className={scss.line}></div>

                    </div>
                  )}

                  {historyActive && (
                    <div className={scss.history_details}>
                      <p>Donald Trump served as the 45th president of the United States from 2017 to 2021. In May 2024, he became the first former president to be convicted of a crime, with 34 felony counts related to falsifying business records. This was connected to a payment made in 2016 to Stormy Daniels, an adult-film star who claimed to have had an affair with Trump. Despite this, he is the Republican nominee for the 2024 U.S. presidential election.</p>
                    </div>
                  )}

                  {opinionActive && (
                    <div className={scss.opinion_details}>
                      <p>We believe that Trump will lose the upcoming election. Even though he was president before and still has many supporters, his legal problems and controversies have hurt his chances. With more people against him and changes in politics, it will be hard for him to win in 2024.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>
              References:
              <a target="_blank" href="https://www.britannica.com/biography/Kamala-Harris">Harris</a>
              |
              <a target="_blank" href="https://www.britannica.com/biography/Donald-Trump">Trump</a>
              |
              <a target="_blank" href="https://en.wikipedia.org/wiki/Kamala_Harris#/media/File:Kamala_Harris_Vice_Presidential_Portrait.jpg">Harris (Picture)</a>
              |
              <a target="_blank" href="https://en.wikipedia.org/wiki/Donald_Trump#/media/File:Donald_Trump_official_portrait.jpg">Trump (Picture)</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prediction