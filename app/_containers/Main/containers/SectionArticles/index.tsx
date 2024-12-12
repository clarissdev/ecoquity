
import cx from "clsx";
import styles from "./index.module.scss";
import { Post } from "@/modules/business-types";
import CardArticle from "@/app/articles/_containers/Main/containers/CardArticle";

type Props = {
    className?: string;
    style?: React.CSSProperties;
    posts: Post[];
  };

export default function SectionArticles({ className, style, posts }: Props) {

    return (
        <section className={cx(styles.container, className)} style={style}>
            <div className={styles.container}>
                <h1>Latest Articles</h1>
                    <div className={styles.articlesContainer}>
                        {posts.map((post) => (
                            <div key={post.id} className={styles.articles}>
                                <CardArticle  post={post} />
                            </div>
                        ))}
                    </div>

            </div>
        </section>
    )
}

