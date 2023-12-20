import Header from './conponents/Header';
import './App.css';
import HomePage from './conponents/HomePage';
import UpComingMovie from './conponents/UpComingMovie';
import Film from './conponents/EXFilm';
import Trending from './conponents/Trending';
import Popular from './conponents/Popular';
import TopRate from './conponents/TopRate';
import Footer from './conponents/Footer';
import Tabs from './conponents/Tabs';


function App() {
  return (
    <div className='App bg-black'>
      <Header />
      <HomePage />
      <UpComingMovie/>
      <Trending/>
      <Popular/>
      <TopRate/>  
      <Footer/>    
      
    </div>

  );
}

export default App;
