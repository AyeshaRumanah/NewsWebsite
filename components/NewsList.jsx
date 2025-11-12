import NewsCard from './NewsCard';

export default function NewsList({ articles }) {
  if (!articles.length)
    return <p className="no-articles">No articles found.</p>;

  return (
    <div className="news-grid">
      {articles.map((a, i) => (
        <NewsCard key={i} article={a} />
      ))}
    </div>
  );
}
