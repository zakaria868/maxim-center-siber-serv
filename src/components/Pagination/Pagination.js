import React, { useState } from "react";
import "./Pagination.css";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, 4];

  const goToPage = (page) => {
    if (page >= 1 && page <= pages.length) {
      setCurrentPage(page);
    }
  };

  return (
    
    <div className="pagination">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ««
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => goToPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        »»
      </button>
    </div>
    
  );
}
