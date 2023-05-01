import {useSelector} from "react-redux";
import productReducer from "../../store/reducers/product-reducer";

const ProductList = ()=>{
  const productList = useSelector(state=>state.productReducer.productsList)
  return <div className='P-user-list'>
    {productList.length ? productList.map((item, index) => {
      return <p>{item}</p>
    }) : <p>productList list was empty</p>}
  </div>
}
export default ProductList