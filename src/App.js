
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Destinations from './components/Destinations';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Home />
    <Destinations  
            image1="/images/Pic2.png"
            image2="/images/Pic3.png"
            image3= "/images/Pic4.png"
            />
    <Testimonials avatarImage='./public/images/avatar.jpeg'/>
    <Footer />
    </>
  );
}

export default App;
