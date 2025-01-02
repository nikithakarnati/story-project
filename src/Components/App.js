import '../Styles/App.css';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Addstory from './Addstory';
import Bookmark from './Bookmark';
import Viewstory from './Viewstory';
import Fruits from './Fruits';
import All from './All';
import Medical from './Medical';
import World from './World';
import India from './India';

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>

  },
  {
    path : '/Register',
    element : <Register></Register>
  },
  {
    path : '/Login',
    element : <Login></Login>
  },
  {
    path : '/Dashboard',
    element :<Dashboard></Dashboard>
  },
  {
    path : '/Addstory',
    element :<Addstory></Addstory>
  },
  {
    path : '/Bookmark',
    element :<Bookmark></Bookmark>
  },
  {
    path : '/Viewstory/:index',
    element :<Viewstory></Viewstory>
  },
  {
    path : '/All',
    element :<All></All>
  },
  {
    path : '/Fruits',
    element :<Fruits></Fruits>
  },
  {
    path : '/Medical',
    element :<Medical></Medical>
  },
  {
    path : '/World',
    element :<World></World>
  },
  {
    path : '/India',
    element :<India></India>
  },

])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App