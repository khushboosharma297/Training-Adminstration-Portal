import './css/App.css';
import './css/props.css';
import './css/fontstyle.css'
import {Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './screens/Header'
import Sidebar from './screens/Sidebar';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Profile from './screens/Profile';
import MyCourse from './screens/MyCourse';
import Logout from './screens/Logout';
function App() {
  return (
    <div className="App flex">
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;
