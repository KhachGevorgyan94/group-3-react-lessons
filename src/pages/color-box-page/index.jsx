import './style.scss'
import ColorBox from "./components/color-box";

const ColorBoxPage = () => {
  return <div className='P-color-box-list'>
      <ColorBox color={'black'} borderRadius={20}/>
      <ColorBox color={'blue'}/>
      <ColorBox color={'red'}/>
      <ColorBox color={'orange'}/>
      <ColorBox title={'test'} description={'test 1'}/>
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox borderRadius={12}/>
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
      <ColorBox />
  </div>
}
export default ColorBoxPage