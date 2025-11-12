import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [t, setT] = useState('');

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(t);
      }}
    >
      <input
        value={t}
        onChange={(e) => setT(e.target.value)}
        placeholder="Search news..."
        className="search-input"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}
