import { RefObject } from "react"
import About from "../pages/aboutSection/About"
import Fact from "../pages/factsSection/Fact"
import History from "../pages/historySection/History"
import Home from "../pages/homeSection/Home"
import Material from "../pages/materialSection/Material"
import OtherProject from "../pages/otherProjects/OtherProject"
import Prediction from "../pages/predictionSection/Prediction"
import SpecialFeatures from "../pages/specialFeaturesSection/SpecialFeatures."
import scss from "./Main.module.scss"

interface MainProps {
  HomeRef: RefObject<any | null>;
  PredictionsRef: RefObject<any | null>;
  FactsRef: RefObject<any | null>;
  HistoryRef: RefObject<any | null>;
  MaterialsRef: RefObject<any | null>;
  SpecialFeaturesRef: RefObject<any | null>;
  OtherProjectsRef: RefObject<any | null>;
  AboutUsRef: RefObject<any | null>;
}

const Main: React.FC<MainProps> = ({ HomeRef, PredictionsRef, FactsRef, HistoryRef, MaterialsRef, SpecialFeaturesRef, OtherProjectsRef, AboutUsRef }) => {
  return (
    <main className={scss.main}>
      <Home HomeRef={HomeRef}/>
      <Prediction PredictionsRef={PredictionsRef} />
      <Fact FactsRef={FactsRef}/>
      <History HistoryRef={HistoryRef}/>
      <Material MaterialsRef={MaterialsRef}/>
      <SpecialFeatures SpecialFeaturesRef={SpecialFeaturesRef}/>
      <OtherProject OtherProjectsRef={OtherProjectsRef}/>
      <About AboutUsRef={AboutUsRef}/>
    </main>
  )
}

export default Main