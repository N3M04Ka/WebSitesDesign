import CustomerStories from "./webComponents/CustomerStories"
import Demo from "./webComponents/Demo"
import DemoPlayer from "./webComponents/DemoPlayer"
import Experience from "./webComponents/Experience"
import Features from "./webComponents/Features"
import Header from "./webComponents/Header"
import Partners from "./webComponents/Partners"

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
    </>
  )
}

export default App
