import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.scss'
import './assets/icon/style.css'
import App from "./App";

import {BrowserRouter} from 'react-router-dom'

/**
 * React project@ sksum e ashxatel index.js  faylis, aysinqn
 * startvi  ket@ vor sksvum e asxhatel  da src  papki mej gtnvox index.js fayln e
 *
 * package.json  fayl@ chenq  korcnum ayn shat karevor e  bolor  projectneri hamar
 * ayntex pahpanvum e mer  projecti mej  integrvac bolor  packagneri anunnern irenc versianerov
 * inchpes orinak sass  vor install arecinq
 * cankacac  package install anelu hamar kirarum enq`
 * {npm i  kam   npm install   ev  package anunn}
 * orinak npm i sass
 *
 * project@ gitic clone aneluc heto  petq e anpayman kanchel  {npm i}  hramann
 * vorpeszi node modules papkan ga  vori  mej  pahvum en  mer  projeci hamar naxatesvac  bolor  gradaranner@
 * voronc mijocov mianum e  mer cragir@
 *
 * aystex frel eqn App component@  vor@  handisanu me arandzin  ej
 * vor  mej  pahvac en ayl componentner
 *
 * producti het kapvac himnakan  gorcoxutyunner@ katarum enq {src}  papki mej
 *
 * dra mej  sarqum enq  hetevyal himnakan  papkaner@
 * 1. assets =>  vor mej linelu  mer himnakan projecti hamar naxatesvac  global stylern  ev  nkarnern
 *    a)  style papkan
 *    b)  images papkan
 * 2. components =>  vori mej  dnum enq  himnakan  en  componentenrn@  voronq  petq e  global linen  mer  projecti hamar
 * 3. pages =>  ays papkai mej pahum eqn  ayn componentner@ voronq irancic nerkayacnelu en ejer
 *
 *
 * **/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  /**
   * BrowserRouter  react-router-dom -i himnakan  baxadrichneric mekna  vor@ integrum eqn
   * mer  projecti amenaglxavor  hatvacum vortexic vor sksvume ahxatel mer cragir@
   * BrowserRouter - i mijocov  katarvum e ejeri mijev  routingn  kam navigacian
   *
   * **/
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
