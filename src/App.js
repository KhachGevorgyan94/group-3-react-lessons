import React from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import NumberedList from './pages/Numbered-List';
import HomePage from './pages/homepage';
import ChangeTextColor from './pages/changetextcolor';
import ProductsList from './pages/product-list';
import DarkMode from './pages/darkmode';
import ColorBoxPage from "./pages/color-box-page";
import Users from "./pages/users";
import UserBox from "./pages/users/user-box";

function App() {
  return (
    <div className="App">

      <header>
        <ul>
          <li>
            <NavLink to='/'>HomePage</NavLink>
          </li>
          <li>
            <NavLink to='/changetextcolor'>ChangeTextColor</NavLink>
          </li>
          <li>
            <NavLink to='/numberedlist'>NumberedList</NavLink>
          </li>
         <li>
            <NavLink to='/productlist'>Productlist</NavLink>
          </li>
          <li>
            <NavLink to='/darkmode'>DarkMode</NavLink>
          </li>
          <li>
            <NavLink to='/color-box-page'>Color Boxes</NavLink>
          </li><li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          </ul>
      </header>

      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<ChangeTextColor/>} path='/changetextcolor'/>
        <Route element={<NumberedList/>} path='/numberedlist'/>
        <Route element={<ProductsList/>} path='/productlist'/>
        <Route element={<DarkMode/>} path='/darkmode'/>
        <Route element={<ColorBoxPage/>} path='/color-box-page'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<Navigate to={'/'}/>} path='*'/>
      </Routes>

    </div>
  );
  }

export default App;