export default function Pagination({ currentPage, totalResults, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalResults / pageSize);
  if (totalPages <= 1) return null; 

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-btn"
      >
        ◀ Prev
      </button>

      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="pagination-btn"
      >
        Next ▶
      </button>
    </div>
  );
}
