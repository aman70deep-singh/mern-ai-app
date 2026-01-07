
import './App.css'
import FlowCanvas from './components/FlowCanvas'
import {Toaster} from "react-hot-toast"
function App() {

  return (

    <div style={{ width: "100vw", height: "100vh" }}>
      <FlowCanvas />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
          },
        }}
      />
    </div>

  );

}

export default App
