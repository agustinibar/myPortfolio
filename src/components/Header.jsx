import { Navbar } from "./Navbar"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <div className="bg-white-500 text-black p-4 flex place-content-between">
      <NavLink to={"/"}>
        <h1 className="text-2xl font-bold">Agustin Ibar</h1>
      </NavLink>
      <Navbar />
    </div>
  )
}
