import {useState} from "react";
import UserBox from "./user-box";
import './style.scss'

const Users = () => {
  const [usersList] = useState(
    [
      {
        firstName: 'test 1',
        lastName: 'testyan 1',
        age: 25,
        email: 'test1@gmail.com'
      },
      {
        firstName: 'test 2',
        lastName: 'testyan 2',
        age: 27,
        email: 'test2@gmail.com'
      },
      {
        firstName: 'test 3',
        lastName: 'testyan 3',
        age: 30,
        email: 'test3@gmail.com'
      },
      {
        firstName: 'test 4',
        lastName: 'testyan 4',
        age: 17,
        email: 'test4@gmail.com'
      },
      {
        firstName: 'test 5',
        lastName: 'testyan 5',
        age: 23,
        email: 'test5@gmail.com'
      },
      {
        firstName: 'test 6',
        lastName: 'testyan 6',
        age: 34,
        email: 'test6@gmail.com'
      },
      {
        firstName: 'test 7',
        lastName: 'testyan 7',
        age: 26,
        email: 'test7@gmail.com'
      },
      {
        firstName: 'test 8',
        lastName: 'testyan 8',
        age: 27,
        email: 'test8@gmail.com'
      },
      {
        firstName: 'test 9',
        lastName: 'testyan 9',
        age: 20,
        email: 'test9@gmail.com'
      }
    ]
  )

  const [filterList, setFilterList] = useState(usersList)
  const [filterData, setFilterData] = useState({firstName: '', age: ''})

  const handleChange = (e) => {
    setFilterData({...filterData, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    let newList = []
    if (filterData.age || filterData.firstName) {
      newList = usersList.filter(x => {
        if (filterData.age && !filterData.firstName) {
          return x.age === +filterData.age
        }
        if (filterData.firstName && !filterData.age) {
          return x.firstName === filterData.firstName
        }
        if (filterData.firstName && filterData.age) {
          return x.firstName === filterData.firstName && x.age === +filterData.age
        }
        return x
      })
    } else {
      newList = usersList
    }
    setFilterList(newList)
  }

  return <div>
    <div>
      <input type="text"
             value={filterData.firstName}
             name='firstName'
             onChange={handleChange}
             placeholder='first name'/>
      <input type="text"
             value={filterData.age}
             name='age'
             onChange={handleChange}
             placeholder='age'/>
      <button onClick={handleClick}>Filter</button>
    </div>

    <div className='P-users-list'>
      {filterList.length ? filterList.map((item, index) => {
        return <UserBox key={index} item={item}/>
      }) : <p>nman mard gouyutyun chuni</p>}

    </div>

  </div>
}
export default Users