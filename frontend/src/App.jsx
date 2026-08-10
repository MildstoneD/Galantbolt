import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreValues from "./components/CoreValues";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
