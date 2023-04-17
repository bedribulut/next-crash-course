import Link from "next/link"
import styles from "../styles/article.module.css"

function ArticleItem({article}) {
  return (
    <div className={styles.card}>
        <Link href={`/article/${article.id}`}>
            <h3>
                {article.title} &rarr;
            </h3>
            <p>
                {article.body}
            </p>
        </Link>
    </div>
  )
}

export default ArticleItem