export default function Header({ onSelectCategory }) {
  const cats = ['business', 'technology', 'sports', 'entertainment', 'health', 'science'];

  return (
    <header className="header">
      {cats.map((c) => (
        <button
          key={c}
          onClick={() => onSelectCategory(c)}
          className="category-btn"
        >
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </button>
      ))}
    </header>
  );
}

