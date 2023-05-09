import './style.scss'
import axios from "axios";
import {useDispatch} from "react-redux";
import {actions} from "../../store/reducers/random-numbers/actions";
import {API_CONNECTION} from "../../platform/connection";

const Header = () => {
  const dispatch = useDispatch()
  const createRandomNumber = async () => {
    // 1 - 100000
    const x = Math.floor(Math.random() * 10000)
    const result = await axios.post(`${API_CONNECTION}/randomNumbers`,
      {number: x})
    if (result.data) {
      dispatch({type: actions.CREATE_RANDOM_NUMBER, payload: x})
    }
  }


  return <header>
    <button onClick={createRandomNumber}>Add Random Number</button>
  </header>
}


export default Header