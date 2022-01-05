import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { useEffect } from 'react'

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something Went Wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  )
}

const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000))

// toast.promise(
//   resolveAfter3Sec,
//   {
//     pending: 'Promise is pending',
//     success: 'Promise resolved 👌',
//     error: 'Promise rejected 🤯'
//   }
// )

toast.configure()
function App() {

  const getData = async () => {
      const response = await toast.promise(
      fetch("https://trgate-api.herokuapp.com/api/"),
      {
        pending: 'Promise is pending',
        success: 'Promise resolved 👌',
        error: 'Promise rejected 🤯'
      }
  );
  const data = await response.json()
  console.log(response)
  }
  useEffect(() => {
    getData()
  }, [])
  const notify = () => {
    // toast.success('Basic notification', {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
    // toast.error('Basic notification', {position: toast.POSITION.TOP_CENTER})
    // toast.warn(<CustomToast/>, {position: toast.POSITION.TOP_RIGHT})

    // toast.info('Basic notification', {position: toast.POSITION.BOTTOM_LEFT})
    // toast('Basic notification', {position: toast.POSITION.BOTTOM_RIGHT})
    // toast('Basic notification', {position: toast.POSITION.BOTTOM_CENTER})
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
