import { NavLink } from "react-router-dom";

export const Article = ({id, img, num, tittle, text}) => {
  return (
    <article className='flex h-[162px] m-4 '>
        <div className='w-[100px] flex-none sm:flex justify-center items-center pt-8'>
          <NavLink to={`/${id}`}>
            <img src={img} alt="Me" className="w-32"/>
          </NavLink>
        </div>
        <div className='pl-6'>
            <p className='text-LiteBlue text-3x1 mb-[18px] font-bold'>{num}</p>
            <NavLink to={`/${id}`}>
            <h2 className='font-bold mb-[18px] hover:text-Blue cursor-pointer'>{tittle}</h2>
            </NavLink>
            <p className='text-Black text-[16px]'>{text}</p>
        </div>
    </article>
  )
}
