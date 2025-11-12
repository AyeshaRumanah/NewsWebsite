export default function NewsCard({ article }) {
  return (
    <div className="news-card" onClick={() => window.open(article.url, '_blank')}>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} className="news-image" />
      ) : (
        <div className="no-image">No Image</div>
      )}

      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Continue reading →
        </a>
      </div>
    </div>
  );
}
