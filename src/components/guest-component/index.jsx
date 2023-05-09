import {Navigate, Route, Routes} from "react-router-dom";
import LogIn from "../../pages/log-in";
import React from "react";

const GuestComponent = () => {
  return <Routes>
    <Route element={<LogIn/>} path={'/login'}/>
    <Route element={<Navigate to={'/login'}/>} path={'/*'}/>
  </Routes>
}
export default GuestComponent