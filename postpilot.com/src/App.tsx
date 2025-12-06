import Header from "./pageElements/Header.tsx"
import Advertisement from "./pageElements/Advertisement.tsx"
import Dtc from "./pageElements/Dtc.tsx"
import Statistic from "./pageElements/Statistic.tsx"
import Quotes from "./pageElements/Quotes.tsx"
import CardsSection from "./pageElements/CardsSection.tsx"
import StepsSection from "./pageElements/stepsSection.tsx"
import CarouselSection from "./pageElements/CarouselSection.tsx"
import SuccessStory from "./pageElements/SuccessStory.tsx"
import TryOutSection from "./pageElements/TryOutSection.tsx"
import TrendsAndInsights from "./pageElements/TrendsAndInsights.tsx"
import Footer from "./pageElements/Footer.tsx"
function App() {
  return (
    <>
        <Header/>
        <Advertisement/>
        <Dtc/>
        <Statistic/>
        <Quotes/>
        <CardsSection/>
        <StepsSection/>
        <CarouselSection/>
        <SuccessStory/>
        <TryOutSection/>
        <TrendsAndInsights/>
        <Footer/>
    </>
  )
}

export default App
