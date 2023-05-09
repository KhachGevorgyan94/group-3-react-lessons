import './style.css'
import axios from "axios";
import {API_CONNECTION} from "../../platform/connection";
import {useEffect, useState} from "react";
import NumberCard from "../number-card";
import {useSelector} from "react-redux";

const NumbersList = () => {
  const createdNumber = useSelector(state => state.randomNumbersReducer.createdNumber)
  const [numbers, setNumbers] = useState([])
  const getNumbersList = async () => {
    const result = await axios.get(`${API_CONNECTION}/randomNumbers`)
    if (result.data) {
      setNumbers(result.data)
    }
  }

  useEffect(() => {
    getNumbersList()
  }, [createdNumber])


  return <section className='P-numbers-section'>
    <div className='P-numbers-list'>
      {numbers.map((item) => {
        return <NumberCard item={item}
                           key={item.id}
                          />
      })}
    </div>
    <div className='P-info'></div>
  </section>
}

export default NumbersList