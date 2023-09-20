import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./pages/Admin";
import TextEdu from "./pages/TextEdu";
import { About, Hero, Navbar,Education,Hiw, Maps } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        </div>
        <About />
        <Education />
        <Hiw />
        <Maps />
    </div>} />
    <Route path="/admin" element={
    <div className="py-10 bg-neutral-700">
    <Admin/>
    </div>
    }/>
    <Route path="/text" element={
      <div className="relative z-0 bg-black-500">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      </div>
      <TextEdu />
      </div>
    }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
