import AboutSection from "./sections/AboutSection"
import Courses from "./sections/Courses"
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
      </div>
    </>
  )
}

export default App
