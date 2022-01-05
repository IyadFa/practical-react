import './App.css';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { forwardRef } from 'react'

const ColoredTooltip = () => {
  return <span style={{color: 'yellow'}}>Colored Component</span>
}

const CustomChild = forwardRef( (props, ref) => {
  return <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
      </div>
}) 

function App() {
  return (
    <div className="App">
      <div style={{paddingBottom: "20px"}}>
        <Tippy placement='right' arrow={false} delay={1000} content="Hovered">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: "20px"}}>
        <Tippy content={<span style={{color: 'orange'}}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: "20px"}}>
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{paddingBottom: "20px"}}>
        <Tippy content={<ColoredTooltip />}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}

export default App;
