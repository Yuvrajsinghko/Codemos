import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import PlacementsPage from "./pages/PlacementsPage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/placements' element={<PlacementsPage />} />
          <Route path='/about' element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;