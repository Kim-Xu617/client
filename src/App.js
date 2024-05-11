import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './app.scss'
import { useState } from 'react';



const Layout = ({isLoggedIn, onChangeLoggedIn}) => {
  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} onChangeLoggedIn={onChangeLoggedIn}/>
      <Outlet />
      <Footer />
    </div>
  );
};



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  const onChangeLoggedIn = () =>{
    setIsLoggedIn(!isLoggedIn)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isLoggedIn={isLoggedIn} onChangeLoggedIn={onChangeLoggedIn}/>,
      children:[
        {
          path: "/",
          element: < Home/>,
        },
        {
          path: "/products/:id",
          element: < Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/login",
          element: <Login onChangeLoggedIn={onChangeLoggedIn}/>,
        },
        {
          path: "/signup",
          element: <Signup />,
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
