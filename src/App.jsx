import AboutSection from "./sections/AboutSection"
import Courses from "./sections/Courses"
import HeroSection from "./sections/HeroSection"
import Placements from "./sections/Placements"

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <Placements />
        <Courses />
      </div>
    </>
  )
}

export default App