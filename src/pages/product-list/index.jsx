//import React from 'react';
import './style.scss'
//class ProductsList extends React.Component {
//state = {
//   products:[
//       {
//         name: 'product 1',
//         price: 1300,
//         description: ' product 1 information'
//       },
//       {
//         name: 'product 2',
//         price: 2000,
//        description: ' product 2 information'
//       },
//       {
//         name: 'product 3',
//         price: 1070,
//         description: ' product 3 information'
//       },
//       {
//         name: 'product 4',
//         price: 2300,
//        description: ' product 4 information'
//      },
//       {
//         name: 'product 5',
//         price: 300,
//         description: ' product 5 information'
//       },
//       {
//         name: 'product 6',
//         price: 1450,
//         description: ' product 6 information'
//       }
//     ]
//  }
//  constructor(props) {
//    super();
//     console.log(props)
//   }
// render() {

// return (
///   <div className='P-flex-container'>
///       {this.state.products.map((item, index) => {
///          return <div className='P-flex-box'  >

///
///    <p>{item.name}</p>
//    <p>{item.description}</p>
//    {item.price>1500 ?<p><span className='P-price'>{item.price}</span> <span>{item.price*0.9}</span></p> :<p><span>{item.price}</span></p> }

//   </div> 
//          })}
//    </div>
//  );
//}}
//export default ProductsList ;


import React, {useState} from 'react';

const ProductsList = () => {
  const [products] = useState([
    {
      name: 'product 1',
      price: 1300,
      description: ' product 1 information'
    },
    {
      name: 'product 2',
      price: 2000,
      description: ' product 2 information'
    },
    {
      name: 'product 3',
      price: 1070,
      description: ' product 3 information'
    },
    {
      name: 'product 4',
      price: 2300,
      description: ' product 4 information'
    },
    {
      name: 'product 5',
      price: 300,
      description: ' product 5 information'
    },
    {
      name: 'product 6',
      price: 1450,
      description: ' product 6 information'
    }
  ]);
  return (
    <div className='P-flex-container'>
      {products.map((item) => {
        return <div className='P-flex-box'>
          <p>{item.name}</p>
          <p>{item.description}</p>
          {item.price > 1500 ? <p><span className='P-price'>{item.price}</span> <span>{item.price * 0.9}</span></p> :
            <p><span>{item.price}</span></p>}

        </div>
      })}
    </div>
  );
}

export default ProductsList;