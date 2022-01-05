import './App.css';
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

function App() {

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Modal 
      shouldCloseOnOverlayClick={false} 
      onRequestClose={() => setOpen(false)} 
      isOpen={open}
      style={
        {
          overlay: {
            backgroundColor: 'grey'
          },
          content: {
            color: 'orange'
          }
        }
      }
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setOpen(false)}>CLOSE MODAL</button>
      </Modal>

      <button onClick={() => setOpen(true)}>Open MODAL</button>
    </div>
  );
}

export default App;
