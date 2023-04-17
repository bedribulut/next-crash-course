import { Inter } from 'next/font/google'
import styles from './page.module.css'
import ArticleList from './components/ArticleList';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const articles = await getArticle();
  console.log(articles);

  return (
    <>
        <h1>Welcome to Next</h1>
        <ArticleList articles={articles}/>
    </>

  )
}

async function getArticle() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}