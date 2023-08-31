import { Route, Routes } from "react-router-dom"
import { Landing } from "./views/Landing"
import { Home } from "./views/Home"

function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
  )
}

export default App
