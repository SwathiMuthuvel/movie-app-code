
import './App.css';
// import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';
import Search from './Pages/Search';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div id="container">
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/movie/:movieId' element={<DetailPage />} />
          <Route path='/movie/search/:searchText' element={<Search />} />         
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
