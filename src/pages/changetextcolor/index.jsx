import React, {useState} from 'react';

function ChangeTextColor() {

  const [textData, setTextData] = useState({
    text: '',
    color: '',
    inputViewValue: '',
  })
  const addItem = () => {
    setTextData({...textData, inputViewValue: textData.text})
  };

  const handleChange = (e) => {
    setTextData({...textData, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <input name='text' value={textData.text} onChange={handleChange}/>
      <input name='color' type={"color"} value={textData.color} onChange={handleChange}/>
      {textData.inputViewValue ? <p style={{color: textData.color}}>{textData.inputViewValue}</p> : null}
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ChangeTextColor
