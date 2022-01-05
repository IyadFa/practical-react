import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className="App">
      <ReactPlayer
      controls
      width="480px"
      height="240"
      // playsinline 
      // muted={true}
      // autoPlay={true}
      url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'
      // onReady={() => console.log('OnREADY')}
      />
    </div>
  );
}

export default App;
