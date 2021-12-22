
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import image1 from "./images/Pic2.png";
import image2 from "./images/Pic3.png";
import image3 from "./images/Pic4.png";

function App() {
  return (
    <>
    <Header />
    <Home />
    <Destinations  
            image1= {image1}
            image2= {image2}
            image3= {image3}
            />
    <Testimonials/>
    <Footer />
    </>
  );
}

export default App;
