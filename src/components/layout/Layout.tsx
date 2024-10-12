import Footer from "./footer/Footer"
import Header from "./header/Header"
import Main from "./main/Main"
import scss from "./Layout.module.scss"
import { useRef } from "react"

const Layout = () => {
  const HomeRef = useRef<any>()
  const PredictionsRef = useRef<any>()
  const FactsRef = useRef<any>()
  const HistoryRef = useRef<any>()
  const MaterialsRef = useRef<any>()
  const SpecialFeaturesRef = useRef<any>()
  const OtherProjectsRef = useRef<any>()
  const AboutUsRef = useRef<any>()

  return (
    <div className={scss.layout}>
      <Header
        HomeRef={HomeRef}
        PredictionsRef={PredictionsRef}
        FactsRef={FactsRef}
        HistoryRef={HistoryRef}
        MaterialsRef={MaterialsRef}
        SpecialFeaturesRef={SpecialFeaturesRef}
        OtherProjectsRef={OtherProjectsRef}
        AboutUsRef={AboutUsRef}
      />
      <Main
        HomeRef={HomeRef}
        PredictionsRef={PredictionsRef}
        FactsRef={FactsRef}
        HistoryRef={HistoryRef}
        MaterialsRef={MaterialsRef}
        SpecialFeaturesRef={SpecialFeaturesRef}
        OtherProjectsRef={OtherProjectsRef}
        AboutUsRef={AboutUsRef}
      />
      <Footer />
    </div>
  )
}

export default Layout