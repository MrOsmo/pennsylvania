import React, { RefObject } from "react"
import scss from "./SpecialFeatures.module.scss"

interface SpecialFeaturesProps {
  SpecialFeaturesRef: RefObject<any>
}

const SpecialFeatures: React.FC<SpecialFeaturesProps> = ({ SpecialFeaturesRef }) => {
  return (
    <section className={scss.special_features}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={SpecialFeaturesRef} className={scss.smooth}></div>
          <h1>SPECIAL FEATURES</h1>
          <div className={scss.description}>
            <p>Learn what makes Donald Trump and Kamala Harris stand out in the 2024 election as we delve into their backgrounds, careers, goals, and key speeches that define their leadership styles and visions for America.</p>
          </div>

          <div className={scss.table}>
            <div className={scss.candidates_row}>
              <h2 className={scss.harris}>Harris</h2>
              <h2 className={scss.trump}>Trump</h2>
            </div>

            <div className={scss.sides}>
              <div className={scss.left}>
                <ul>
                  <li>Kamala Harris is the first Black and South Asian woman to become Vice President, with parents from India and Jamaica.</li>
                  <li>She was a lawyer, California's Attorney General, and a U.S. Senator fighting for justice.</li>
                  <li>Her goals include affordable healthcare, better education, protecting the environment, and supporting women's and minority rights.</li>
                  <li>In her speeches, she promotes equality, justice, and encourages youth involvement in politics.</li>
                </ul>
              </div>
              <div className={scss.middle_line}></div>
              <div className={scss.right}>
                <ul>
                  <li>Donald Trump was a businessman and TV star before becoming president, with no prior political experience.</li>
                  <li>He became president in 2016, promising to "drain the swamp" and clean up the government.</li>
                  <li>His goals included lowering taxes, helping businesses, strengthening the U.S. economy, and enforcing stricter immigration rules, including building a wall between the U.S. and Mexico.</li>
                  <li>Trump's speeches were often direct and controversial, focusing on loving America, protecting jobs, and being tough on immigration. He also used Twitter to communicate his ideas directly to the public.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>
              References:
              <a target="_blank" href="https://www.whitehouse.gov/administration/vice-president-harris/">Harris</a>
              |
              <a target="_blank" href="https://www.ft.com/content/563a6c72-d754-44aa-a35d-cb6ad6275b64">Trump</a>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SpecialFeatures