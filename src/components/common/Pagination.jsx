import styles from "./Pagination.module.css";

export function Pagination({ currentPage, totalPages, handlePageChange }) {
  console.log(currentPage);
  console.log(totalPages);

  const pageItems = [];

  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <a
        href="#"
        key={i}
        onClick={(event) => {
          event.preventDefault();

          handlePageChange(i);
        }}
        className={`${styles.page} ${currentPage == i ? styles.current : ""}`}
        aria-current={`${currentPage == i ? "page" : ""}`}
      >
        {i}
      </a>,
    );
  }

  return pageItems.length > 0 ? (
    <nav className={styles.pagination} aria-label="Archive pages">
      <a
        className={styles.control}
        onClick={(event) => {
          event.preventDefault();

          handlePageChange(currentPage - 1);
        }}
        aria-label="Previous page"
        aria-disabled={currentPage > 1 ? "false" : "true"}
      >
        Prev
      </a>

      {pageItems.map((page) => page)}

      <a
        className={styles.control}
        onClick={(event) => {
          event.preventDefault();

          handlePageChange(currentPage + 1);
        }}
        aria-label="Next page"
        aria-disabled={currentPage < totalPages ? "false" : "true"}
      >
        Next
      </a>
    </nav>
  ) : (
    <></>
  );
}
