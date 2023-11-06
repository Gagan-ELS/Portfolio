import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
