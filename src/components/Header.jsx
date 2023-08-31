import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <div className="bg-white-500 text-black p-4 flex place-content-between">
      <h1 className="text-2xl font-bold">Agustin Ibar</h1>
      <Navbar />
    </div>
  )
}
