import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeliculasGrid from './Components/PeliculasGrid/PeliculasGrid'
import DetailContainer from './Components/DetailContainer/DetailContainer'


function App() {
  return (
    <BrowserRouter>
      <h1 className="title">Peliculas</h1>
      <Routes>
        <Route exact path='/' element={<PeliculasGrid />} />
        <Route exact path="/pelicula/:id" element={<DetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
