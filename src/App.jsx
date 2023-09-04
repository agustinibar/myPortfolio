import { Route, Routes } from "react-router-dom"
import { Home } from "./views/Home"
import { Contact } from "./views/Contact"
import { Header } from "./components/Header"
import { AboutMe } from "./views/AboutMe"
import Footer from "./components/Footer"
import { Portfolio } from "./views/Portfolio"
import { RickAndMorty } from "./views/RickAndMorty"
import { DoggieApp } from "./views/DoggieApp"
import { DreamLodge } from "./views/DreamLodge"

function App() {
  

  return (
    <>
    <Header/>
    <div className="mb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/rick-and-morty" element={<RickAndMorty/>}/>
          <Route path="/doggie" element={<DoggieApp/>}/>
          <Route path="/dream-lodge" element={<DreamLodge/>}/>
        </Routes>
      </div>
    <Footer/>
    </>
  )
}

export default App
