import { ArticlesContainer } from "../components/ArticlesContainer";
import { Header } from "../components/Header";
import { Lifecycle } from "../components/Lifecycle";
import { MainArticle } from "../components/MainArticle";

export const Home = () => {
  return (
    <main className="px-4 pt-6">
    <div className='sm:flex sm:gap-8'>
    <MainArticle />
    <Lifecycle />
    </div>
    <ArticlesContainer />
    </main>
  )
}
