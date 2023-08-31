
export const Article = ({img, num, tittle, text}) => {
  return (
    <article className='flex h-[162px] m-4 '>
        <div className='w-[100px] flex-none sm:flex justify-center items-center'>
            <img src={img} alt="Me" className="w-32"/>
        </div>
        <div className='pl-6'>
            <p className='text-LiteBlue text-3x1 mb-[18px] font-bold'>{num}</p>
            <h2 className='font-bold mb-[18px] hover:text-Blue cursor-pointer'>{tittle}</h2>
            <p className='text-Black text-[16px]'>{text}</p>
        </div>
    </article>
  )
}
