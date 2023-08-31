import { Cycle } from "./Cycle"
import logo from '../assets/1.png'
export const Lifecycle = () => {
  return (
    <aside className='bg-Marine text-Marfil py-[28px] px-[20px] mb-8 max-w-md'>
        <h1 className='text-LiteBlue text-4xl font-bold'>Me:</h1>
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
        <img src={logo} alt="logo" />
    </aside>
  )
}
