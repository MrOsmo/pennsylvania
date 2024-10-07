import scss from "./Fact.module.scss"
import img1 from "../../../../assets/cards/img1.jpg"
import img2 from "../../../../assets/cards/img2.jpg"
import img3 from "../../../../assets/cards/img3.jpg"
import img4 from "../../../../assets/cards/img4.webp"
import img5 from "../../../../assets/cards/img5.jpg"
import img6 from "../../../../assets/cards/img6.jpg"

const Fact = () => {
  return (
    <section className={scss.fact}>
      <div className={scss.container}>
        <div className={scss.background}>
          <div className={scss.content}>
            <h1>FACTS</h1>
            <p>Here’s what makes Pennsylvania unique - check out these fun facts!</p>
            <div className={scss.cards}>
              <div className={scss.card_one}>
                <img src={img1} alt="Image_1" />
                <p className={scss.title}>General:</p>
                <div className={scss.border1}></div>
                <p>Pennsylvania, "The Keystone State," has 19 electoral votes, a population of nearly 13 million, and its capital is Harrisburg. The governor is Josh Shapiro, with Bob Casey Jr. and John Fetterman serving as U.S. Senators.</p>
              </div>

              <div className={scss.card_one}>
                <img src={img2} alt="Image_2" />
                <p className={scss.title}>Voting predictions:</p>
                <div className={scss.border1}></div>
                <p>Predicting elections is tough because people's opinions change. Polls and factors like education and important issues help, but results can still be different. In 2020, Biden won by less than expected. Voter turnout and key issues matter a lot.</p>
              </div>

              <div className={scss.card_one}>
                <img src={img3} alt="Image_3" />
                <p className={scss.title}>Election Factors:</p>
                <div className={scss.border1}></div>
                <p>Important factors that influence election outcomes include voting history, ethnicity, religion, the economy, income inequality, and education levels. These help predict how people will vote.</p>
              </div>

              <div className={scss.card_one}>
                <img src={img4} alt="Image_4" />
                <p className={scss.title}>Pennsylvania's Name:</p>
                <div className={scss.border1}></div>
                <p>Pennsylvania is a combination of Latin words that together mean “Penn’s woods.” The name was created by William Penn to honor his father.
                  Some think Pennsylvania’s nickname comes from its central location among the 13 colonies.</p>
              </div>

              <div className={scss.card_one}>
                <img src={img5} alt="Image_5" />
                <p className={scss.title}>Wildlife in Pennsylvania:</p>
                <div className={scss.border1}></div>
                <p>Pennsylvania is home to a diverse range of wildlife, including black bears, elk, red foxes, and white-tailed deer. In the skies, you'll find golden eagles, peregrine falcons, and redheaded woodpeckers.</p>
              </div>

              <div className={scss.card_one}>
                <img src={img6} alt="Image_6" />
                <p className={scss.title}>Pennsylvania's Geography:</p>
                <div className={scss.border1}></div>
                <p>Pennsylvania borders New York, Lake Erie, New Jersey, Delaware, Maryland, West Virginia, and Ohio. It features six regions: the Atlantic Coastal Plain, Piedmont, New England Province, Ridge and Valley, Appalachian Plateaus, and Central Lowland.</p>
              </div>
            </div>
            <div className={scss.reference_div}>
              <div className={scss.border}></div>
              <p className={scss.references}>References:
                <a target="_blank" href="https://www.teachaboutus.org/pluginfile.php/47354/mod_book/chapter/5775/All%202024%20State%20Fact%20Sheets.zip?time=1719314826507">Facts</a>
                |
                <a target="_blank" href="https://kids.nationalgeographic.com/geography/states/article/pennsylvania">Facts (Part 2)</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fact