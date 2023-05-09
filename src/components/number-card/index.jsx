import './style.css'
import axios from "axios";
import {API_CONNECTION} from "../../platform/connection";
import {actions} from "../../store/reducers/random-numbers/actions";
import {useDispatch} from "react-redux";
const NumberCard = ({item, updateList}) => {
  const dispatch = useDispatch()
  const deleteNumber = async ()=>{
    await axios.delete(`${API_CONNECTION}/randomNumbers/${item._id}`)
      dispatch({type: actions.CREATE_RANDOM_NUMBER, payload: item.number})
  }
  return <div className='P-padding-box'>
    <div className='P-number-card'>
      <button onClick={deleteNumber}>Delete</button>
      <h1>{item.number}</h1>
    </div>
  </div>
}
export default NumberCard