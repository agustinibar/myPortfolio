import { Article } from './Article';

import rickMorty from '../assets/rick&morty.png';
import doggie from '../assets/doggie.png'
import dreamlodge from '../assets/dreamlodge.png';

export const ArticlesContainer = () => {
  return (
    <section className='mt-6 sm:flex'>
        <Article
        img={rickMorty}
        num='01'
        tittle='Rick & Morty'
        text='This was my first project based on the Rick&Morty api and using the PERN stack'
        />
        <Article
         img={doggie}
         num='02'
         tittle='Doggie'
         text='An app, using PERN stack and designed for a dog adoption clinic'
         />
        <Article
         img={dreamlodge}
         num='03'
         tittle='Dream Lodge'
         text='Dream Lodge is an app designed for a public that is looking for a luxurious and comfortable lodging in the United States.'
         />
    </section>
  )
}
