import './App.css';
import Login from './login';
import SignUp from './signUp';
import MovieDetail from './movieDetail';
import SearchMovies from './searchMovies';

function App() {
  return (
    <div className='App'>
      <div>
        <h2>WatchaPedia</h2>
        <Login />
        <SignUp />
        {/* <MovieDetail /> */}
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
