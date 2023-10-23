import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blogs from "./pages/blogs/Blogs";

import "./App.css"
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/notFound/NotFound";
import Projects from "./pages/portfolio/Projects";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />

          <Route path='/not-found' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;