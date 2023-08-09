import Carousel from './contents/Carousel';
import Explore from './contents/Explore';
import FeaturedNews from './contents/FeaturedNews';
import Footer from './contents/Footer';
import Header from './contents/Header';
import OurBrands from './contents/OurBrands';
import OurSustainable from './contents/OurSustainable';

function App() {
  return (
    <div className="App bg-[#F1F1F1]">
      <Header />
      <Carousel />
      <OurSustainable />
      <FeaturedNews />
      <Explore />
      <OurBrands />
      <Footer />
    </div>
  );
}

export default App;
