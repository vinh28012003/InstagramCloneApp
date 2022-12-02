import './App.css';
import HomePage from './components/HomePage/HomePage.js'
import LoginP from'./components/LoginPage/LoginP';

function App() {
  return (
    <div className="App">
      {
       (localStorage.getItem("users")==undefined || localStorage.getItem("users")==null) ?
       <LoginP></LoginP> : <HomePage></HomePage>
      }
    </div>
  );
}

export default App;
