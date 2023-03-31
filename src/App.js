import React from "react";
import HomePage from "./pages/home";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";

import {Routes, Route, Navigate} from 'react-router-dom'
import Header from "./components/header";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return <>
      <Header/>
      <div className='P-pages'>
        {/*Routes   react-router-domi karevor  hatvacneric mekn e
          ays  componenti mej  texadrum eqn  bolor ayn  componentner@ voronq irancic nerkayacnum en  vorpes arandzin ejer

          Route i  mijocov  haytrararum enq ahyd  componentnern hamapatasxanabar  te vor  pathi  depqum vor  component  petqa  cuyc ta  mer  bouser@
         */}
        <Routes>
          <Route element={<HomePage/>} path='/'></Route>
          <Route element={<ContactUs/>} path='/contact-us'></Route>
          <Route element={<AboutUs/>} path='/about-us'></Route>
          <Route element={<Navigate to={'/'}/>} path='*'></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  }
}

export default App




