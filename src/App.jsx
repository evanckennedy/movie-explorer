import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/movie/:slug' element={<MovieDetails />}/>
          </Routes> 
        </div>
      </main>
    </>
  );
}

export default App;