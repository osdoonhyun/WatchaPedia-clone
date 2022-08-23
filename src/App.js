import logo from './logo.svg';
import './App.css';
import Auth from './Login';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div className='App'>
      <div>
        <h2>WatchaPedia</h2>
        <Login />
        <SignUp />
      </div>
    </div>
  );
}

export default App;
