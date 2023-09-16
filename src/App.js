import './App.css';
import HomePage from './Components/Pages/HomePage';
import {Routes, Route, useParams} from 'react-router-dom'
import MovieDetails from './Components/Pages/MovieDetails';

function App() {
  const {id} = useParams()
  return (
    <div>
       <Routes>
        <Route index element={<HomePage id={id}/>}></Route>
        <Route path='/getmovies/:id' id={id} element={<MovieDetails/>}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
