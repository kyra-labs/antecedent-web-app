import styles from "./DigestList.module.css";
import { DateFilter } from "./DateFilter";
import { SearchBar } from "./SearchBar";
import { DigestListItem } from "./DigestListItem";
import { Pagination } from "../common/Pagination";
import { BlockLoader } from "../common/BlockLoader";
import { useDigestArchive } from "../../hooks/useDigestArchive";

import { ErrorState } from "../common/ErrorState";
import { EmptyState } from "../common/EmptyState";

import { useMemo, useState } from "react";

import { DATE_FILTERS } from "../../constants/dateFilters";

import { isSameMonth, isSameWeek } from "../../utils/dateFunctions";

export function DigestList() {
  const { data, error, isLoading, refetch } = useDigestArchive();

  const [searchText, setSearchText] = useState("");
  const [dateFilter, setDateFilter] = useState(DATE_FILTERS.THIS_WEEK);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const handleSearchTextChange = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handleDateFilterChange = (value) => {
    setDateFilter(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredData = useMemo(() => {
    if (data) {
      let filterData = data;

      if (searchText.length > 0) {
        filterData = filterData.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase()),
        );
      }

      if (dateFilter) {
        filterData = filterData.filter((item) => {
          switch (dateFilter) {
            case DATE_FILTERS.THIS_WEEK:
              return isSameWeek(new Date(item.digest_date));

            case DATE_FILTERS.THIS_MONTH:
              return isSameMonth(new Date(item.digest_date));

            default:
              return true;
          }
        });
      }

      return filterData;
    }
  }, [dateFilter, searchText, data]);

  const paginatedData = useMemo(() => {
    // Calculate indexes
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the original data array to get only the current page items
    return filteredData?.slice(indexOfFirstItem, indexOfLastItem) ?? [];
  }, [currentPage, filteredData]);

  let content;

  if (isLoading) content = <BlockLoader />;
  else if (error) content = <ErrorState onRetry={refetch} />;
  else if (paginatedData.length === 0) content = <EmptyState />;
  else
    content = (
      <>
        <div className={styles.controls}>
          <SearchBar
            searchText={searchText}
            handleSearchTextChange={handleSearchTextChange}
          />
          <DateFilter
            dateFilter={dateFilter}
            handleDateFilterChange={handleDateFilterChange}
          />
        </div>

        <div className={styles.list}>
          {paginatedData.map((digest) => (
            <DigestListItem
              key={digest.id}
              id={digest.id}
              title={digest.title}
              date={new Date(digest.digest_date).toLocaleDateString("en-us", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              readingTime={`${digest.reading_minutes} min read`}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          handlePageChange={handlePageChange}
        />
      </>
    );

  return (
    <section className={`container pageReveal ${styles.archive}`}>
      <header className={styles.heading}>
        <div>
          <p className={styles.kicker}>Reading archive</p>
          <h1>Archive</h1>
        </div>
        <p>
          Previous editions, kept close to the dates and stories that shaped
          them.
        </p>
      </header>

      {content}
    </section>
  );
}
