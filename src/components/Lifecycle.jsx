import { Cycle } from "./Cycle"
import logo from '../assets/1.png'
import { NavLink } from "react-router-dom"
import { Contact } from "../views/Contact"
export const Lifecycle = () => {
  return (
    <aside className='bg-Marine text-Marfil py-[28px] px-[20px] mb-8 max-w-md'>
        <Cycle
        tittle='Tech Skills'
        text='Explore my technical skill set, from programming languages and technologies to tools and frameworks. Discover how I apply this knowledge to create innovative solutions and exciting projects.'
        />
        <Cycle
        tittle='Soft Skills'
        text='Beyond the code, delve into the skills that make me a well-rounded professional. Learn how my communication, teamwork, creativity, and adaptability enhance my contribution to projects and teams.'
        />
        <Cycle
         tittle='Present & Future'
         text="Take a glimpse into my current and future world. Explore my ongoing projects and get to know my ambitious plans for the future. From projects in development to ideas taking shape, this section reveals what's on my horizon."
         />
         <NavLink to={'/contact'}>
        <h1 className='text-LiteBlue text-4xl font-bold mt-8 md:mt-12 pt-12'>Contact me: </h1>
        <img src={logo} alt="logo" />
         </NavLink>
    </aside>
  )
}
