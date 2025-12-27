import CustomerStories from "./webComponents/CustomerStories"
import DataIntegration from "./webComponents/DataIntegration"
import Demo from "./webComponents/Demo"
import DemoPlayer from "./webComponents/DemoPlayer"
import Experience from "./webComponents/Experience"
import Features from "./webComponents/Features"
import Header from "./webComponents/Header"
import LoveAndTrusted from "./webComponents/LoveAndTrusted"
import Partners from "./webComponents/Partners"
import Revenue from "./webComponents/Revenue"
import Steps from "./webComponents/Steps"

function App() {
  return (
    <>
      <Header/>
      <Demo/>
      <DemoPlayer/>
      <Partners/>
      <Experience/>
      <CustomerStories/>
      <Features/>
      <Revenue/>
      <Steps/>
      <DataIntegration/>
      <LoveAndTrusted/>
    </>
  )
}

export default App
