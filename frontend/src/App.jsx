import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/aboutUs";
import ProjectsPage from "./pages/projects";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <WhyChooseUs />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
