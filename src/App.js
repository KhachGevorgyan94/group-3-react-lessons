import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {CreateUser} from "./components/create-user";
import {UserList} from "./components/user-list";
import ProductList from "./components/product-list";


function App() {

  return (
    <div>
      <CreateUser/>
      <UserList/>
      {/*<ProductList/>*/}
    </div>
  );
}

export default App;