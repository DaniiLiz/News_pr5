import Link from "next/link";

interface NewsItem {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string;
}

export default function NewsCard({ item }: { item: NewsItem }) {
    return (
        <article className="news-card">
      <span className={`news-category news-category-${item.category.toLowerCase()}`}>
        {item.category}
      </span>
            <h2 className="news-title">
                <Link href={`/news/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="news-summary">{item.summary}</p>
            <div className="news-footer">
                <time className="news-date">{item.date}</time>
                <Link href={`/news/${item.id}`} className="read-more">
                    Читать далее
                </Link>
            </div>
        </article>
    );
}