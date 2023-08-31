import imageLittle from '../assets/myLife540.png';
import imageSm from '../assets/sm.png';

export const MainArticle = () => {
  return (
    <section className='mb-12'>
        <picture>
            <source media="(max-width: 640px)" srcSet={imageLittle}/>
            <source media="(min-width: 641px)" srcSet={imageSm}/>
            <img src={imageLittle} alt="About me" className="h-[300px] sm:h-[540px]"/>
        </picture>
        <div className='sm:flex sm:items-center sm:justify-center mt-12'>
        <div className='flex-1'>
        <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>Do you want to know more about me?</h2>
        </div>
        <div className='flex-1 pt-9'>
        <p className='text-[13px] mb-10 sm:text-[22px]'>Let me explain in a few lines who I am, what I like and what my goals are!</p>
        <button className='bg-LiteRed w-[185px] h-[48px] uppercase text-Marfil hover:bg-Marine'>Read more</button>
        </div>
        </div>
    </section>
  )
};
