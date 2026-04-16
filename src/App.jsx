import AboutSection from "./sections/AboutSection"
import Courses from "./sections/Courses"
import Footer from "./sections/Footer"
import HeroSection from "./sections/HeroSection"
import Placements from "./sections/Placements"
import QnASection from "./sections/QnASection"

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <Placements />
        <Courses />
        <QnASection />
        <Footer />
      </div>
    </>
  )
}

export default App
