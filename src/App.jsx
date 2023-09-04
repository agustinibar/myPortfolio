import { Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Contact } from "./views/Contact"
import { Header } from "./components/Header"

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
