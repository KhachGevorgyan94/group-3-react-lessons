import '../style.scss'

const ColorBox = ({color, borderRadius, title, description}) => {

  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`
  }

  return <div style={{
    backgroundColor: color ? color : generateRandomColor(),
    borderRadius: borderRadius ? borderRadius : 0
  }} className='P-color-box'>
    {title? <p>{title}</p>:null}
    {description? <p>{description}</p>:null}
  </div>
}
export default ColorBox