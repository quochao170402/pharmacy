import { ReactNode, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  pageSize: number;
  pageIndex: number;
  totalItems: number;
  onPageChange?: (pageSize: number, pageIndex: number) => void;
}

const Pagination = ({
  pageSize,
  pageIndex,
  totalItems,
  onPageChange,
}: Props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(pageIndex);

  const totalPage = Math.round(totalItems / pageSize);

  const handleBackward = () => {
    if (currentPageIndex === 1) return;
    setCurrentPageIndex((prev) => prev - 1);
  };

  const handleForward = () => {
    if (currentPageIndex === totalPage) return;
    setCurrentPageIndex((prev) => prev + 1);
  };

  const handleChangePage = (index: number) => {
    if (index < 1 || index > totalPage) return;
    setCurrentPageIndex(index);
    // onPageChange && onPageChange(pageSize, index);
  };

  useEffect(() => {
    if (onPageChange) onPageChange(pageSize, currentPageIndex);
  }, [currentPageIndex, pageSize]);

  const renderPageNumbers = () => {
    const pages: ReactNode[] = [];

    if (totalPage <= 1) return pages;

    // Always show the first page
    pages.push(
      <li
        key={1}
        className={`pagination-item ${
          currentPageIndex === 1 ? "pagination-item-active" : ""
        }`}
        onClick={() => handleChangePage(1)}
      >
        1
      </li>
    );

    // Add "..." after the first page if necessary
    if (currentPageIndex > 3) {
      pages.push(<li key="start-dots">...</li>);
    }

    // Pages before and after the current page (range: current - 1 to current + 1)
    for (
      let i = Math.max(2, currentPageIndex - 1);
      i <= Math.min(currentPageIndex + 1, totalPage - 1);
      i++
    ) {
      pages.push(
        <li
          key={i}
          className={`pagination-item ${
            currentPageIndex === i ? "pagination-item-active" : ""
          }`}
          onClick={() => handleChangePage(i)}
        >
          {i}
        </li>
      );
    }

    // Add "..." before the last page if necessary
    if (currentPageIndex < totalPage - 2) {
      pages.push(<li key="end-dots">...</li>);
    }

    // Always show the last page
    pages.push(
      <li
        key={totalPage}
        className={`pagination-item ${
          currentPageIndex === totalPage ? "pagination-item-active" : ""
        }`}
        onClick={() => handleChangePage(totalPage)}
      >
        {totalPage}
      </li>
    );

    return pages;
  };

  return (
    <>
      <ul className="flex gap-2 my-2 justify-end items-center">
        <li
          className={`pagination-item ${
            currentPageIndex === 1 ? "pointer-events-none" : ""
          }`}
        >
          <IoIosArrowBack
            className="text-center items-center align-middle"
            onClick={handleBackward}
          />
        </li>
        {renderPageNumbers()}
        <li
          className={`pagination-item ${
            currentPageIndex === totalPage ? "pointer-events-none" : ""
          }`}
        >
          <IoIosArrowForward
            className="text-center items-center align-middle "
            onClick={handleForward}
          />
        </li>
      </ul>
    </>
  );
};

export default Pagination;
