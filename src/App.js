
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
            image1="/Public/images/Pic2.png"
            image2="/Public/images/Pic3.png"
            image3= "/Public/images/Pic4.png"
            />
    <Testimonials avatarImage='/Public/images/avatar.jpeg'/>
    <Footer />
    </>
  );
}

export default App;
