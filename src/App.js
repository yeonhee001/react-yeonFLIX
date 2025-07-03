import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

import Header from './component/Header';
import Home from './page/Home';
import Movies from './page/Movies';
import TVSeries from './page/TVSeries';
import List from './page/List';
import Footer from './component/Footer';
import './style.scss';
import './style-res.scss';

function App() {
  return (
    <Router className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvseries' element={<TVSeries/>}/>
          
          <Route path='/movies/:id' element={<List/>}/>
          <Route path='/tvseries/:id' element={<List/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
