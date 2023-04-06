import Box from "./components/box";

const App = () => {

  return <div className='P-data'>
    <Box title={'title 1'} description={'description 1'}/>
    <Box title={'title 2'} />

  </div>
}

// class App extends React.Component{
//   render() {
//     return <div className='P-data'>
//       <h1>Hi</h1>
//     </div>
//   }
// }

export default App
