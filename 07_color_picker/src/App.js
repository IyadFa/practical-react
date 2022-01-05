import './App.css';
import { ChromePicker } from 'react-color'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('#ffffff')
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <div>
      <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close color picker': 'Pick a color'}</button>
      {showColorPicker && <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)} />}
      <p>You picked {color}</p>
    </div>
  );
}

export default App;
