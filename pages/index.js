'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import ThemeToggle from '../components/ThemeToggle';


export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 12; // Number of articles per page

  const fetchNews = async () => {
    setLoading(true);
    try {
      const params = { page, pageSize };

      if (query) params.q = query;
      else if (category) params.category = category;

      const res = await axios.get('/api/news', { params });
      setArticles(res.data.articles || []);
      setTotalResults(res.data.totalResults || 0);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, query, page]);
  

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">🗞️ News Website</h1>
  <ThemeToggle/>
      <Header
        onSelectCategory={(selectedCat) => {
          setCategory(selectedCat);
          setQuery('');
          setPage(1); // Reset to first page when category changes
        }}
      />

      <div className="search-section">
        <SearchBar
          onSearch={(searchTerm) => {
            setQuery(searchTerm);
            setCategory('');
            setPage(1); // Reset to first page when search changes
          }}
        />
      </div>

      {loading ? (
        <p className="loading-text">Loading news...</p>
      ) : (
        <>
          <NewsList articles={articles} />
          <Pagination
            currentPage={page}
            totalResults={totalResults}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
