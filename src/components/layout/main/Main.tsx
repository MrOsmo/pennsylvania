import Fact from "../pages/factsSection/Fact"
import History from "../pages/historySection/History"
import Home from "../pages/homeSection/Home"
import Material from "../pages/materialSection/Material"
import OtherProject from "../pages/otherProjects/OtherProject"
import Prediction from "../pages/predictionSection/Prediction"
import SpecialFeatures from "../pages/specialFeaturesSection/SpecialFeatures."
import scss from "./Main.module.scss"

const Main = () => {
  return (
    <main className={scss.main}>
      <Home />
      <Prediction />
      <Fact />
      <History />
      <Material />
      <SpecialFeatures />
      <OtherProject />
    </main>
  )
}

export default Main