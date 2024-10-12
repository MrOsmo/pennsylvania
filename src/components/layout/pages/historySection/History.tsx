import scss from "./History.module.scss"
import electionHistoryGraph from "../../../../assets/election_history.jpg"
import trumpAndHarrisImage from "../../../../assets/graphics.jpg"
import React, { RefObject } from "react"

interface HistoryProps {
  HistoryRef: RefObject<any>
}

const History: React.FC<HistoryProps> = ({ HistoryRef }) => {
  return (
    <section className={scss.history}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={HistoryRef} className={scss.smooth}></div>
          <h1>HISTORY</h1>
          <div className={scss.description}>
            <p>Explore the election results and trends from past years in Pennsylvania, offering a deeper insight into the state's political history.</p>
          </div>


          <div className={scss.sides}>
            <div className={scss.left}>
              <p>The graph shows us that Pennsylvania has been a crucial state in all 59 presidential elections up until 2020. It’s often called a battleground state, meaning it can swing between Democratic and Republican candidates. Before 2016, Pennsylvania usually voted for Democrats, but in 2016, Donald Trump won the state by a narrow margin, helping him secure the presidency. In 2020, Joe Biden won Pennsylvania by 1.2%. Over the years, Pennsylvania's population has decreased, leading to fewer electoral votes—now 19 compared to 38 a century ago.</p>
            </div>
            <div className={scss.right}>
              <img src={electionHistoryGraph} alt="Election-History-Graph" />
            </div>
          </div>

          <div className={scss.line}></div>

          <div className={scss.sides_two}>
            <div className={scss.left}>
              <img src={trumpAndHarrisImage} alt="Trump & Harris" />
            </div>
            <div className={scss.right}>
              <p>
                Pennsylvania has a big impact on U.S. elections. In 48 out of 59 elections, the candidate who won Pennsylvania also won the presidency. Republicans have won the state 26 times, while Democrats won it 20 times. Since 1992, Pennsylvania has mostly voted for Democratic candidates. However, when Donald Trump was running, the state switched to vote for Republicans. This shows that while Pennsylvania usually leans Democratic, it can change depending on the candidates.
              </p>
            </div>
          </div>

          <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>References:
              <a target="_blank" href="https://www.teachaboutus.org/pluginfile.php/47354/mod_book/chapter/5775/All%202024%20State%20Fact%20Sheets.zip?time=1719314826507">History</a>
              |
              <a target="_blank" href="https://en.wikipedia.org/wiki/Elections_in_Pennsylvania">History (Part 2)</a>
              |
              <a target="_blank" href="https://www.statista.com/statistics/1130755/pennsylvania-electoral-votes-since-1789/">History (Part 3)</a>
              |
              <a target="_blank" href="https://www.teachaboutus.org/pluginfile.php/47354/mod_book/chapter/5775/All%202024%20State%20Fact%20Sheets.zip?time=1719314826507">Graph</a>
              |
              <a target="_blank" href="https://www.pexels.com/de-de/foto/kollegen-die-sich-das-umfrageblatt-ansehen-3183153/">Results (Picture)</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History