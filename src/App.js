import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import BestOffer from './components/BestOffer';
import OnYourMind from './components/OnYourMind'
import Top from './components/Top';
import Online from './components/Online';
import Restaurants from './components/Restaurants';
import Best from './components/Best';
import Ads from './components/Ads';

function App() {
  return (
    <div className="App">
      <Header/>
      <BestOffer/>
      <OnYourMind/>
      <Top/>
      <Online/>
      <Restaurants/>
      <Best/>
      <Ads/>
      <Footer/>
    </div>
  );
}

export default App;
