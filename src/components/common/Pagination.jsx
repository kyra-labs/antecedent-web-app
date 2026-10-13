import styles from "./Pagination.module.css";
import { Button } from "@kyralabs/m3e-react";

/**
 * Prev / page numbers / Next. Prev and Next are real buttons, disabled at the ends (before, they
 * were links without href that could step to page 0 or past the last page).
 */
export function Pagination({ currentPage, totalPages, handlePageChange }) {
  if (totalPages < 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="Archive pages">
      <Button
        variant="text"
        size="s"
        aria-label="Previous page"
        isDisabled={currentPage <= 1}
        onPress={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "filled" : "text"}
          size="s"
          shape="square"
          aria-current={currentPage === page ? "page" : undefined}
          onPress={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="text"
        size="s"
        aria-label="Next page"
        isDisabled={currentPage >= totalPages}
        onPress={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
