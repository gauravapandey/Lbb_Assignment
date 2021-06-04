import React, { useEffect, useState } from "react";
import './Pagination.scss';

const Pagination = (props) => {
  const {
    pageNumber,
    setPageNumber,
    totalPages
  } = props;
  useEffect(()=>{
    totalPages > 10 ? setLastPage(10) : setLastPage(totalPages);
  },[])
  
  const [lastPage, setLastPage] = useState(1);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  }

  const handlePrevPage = () => {
    setPageNumber(pageNumber - 1);
  }

  const pagesNumberToBeDisplayed = () => {
    let elements = [];
    for (let i = 1; i <= lastPage; i++) {
      elements.push(
        <span
          className={ pageNumber === i ? 'pointer active' : 'pointer' }
          onClick={() => setPageNumber(i)}
        >
          {i}
        </span>
      );
    }
    return elements;
  };

  return (
    <React.Fragment>
      <div className="pagination">
        {totalPages > 1 ? (
          <div className="page-count">
            <svg
              className="previous-arrow pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={
                pageNumber > 1
                  ? handlePrevPage
                  : null
              }
            >
              <path
                fill="#767777"
                d="M12.171 12.001L15 14.83l-1.414 1.415-4.243-4.243 4.243-4.243L15 9.173l-2.829 2.828z"
              />
            </svg>
            {pagesNumberToBeDisplayed()}
            <svg
              className="next-arrow pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={
                pageNumber < totalPages
                  ? handleNextPage
                  : null
              }
            >
              <path
                fill="#767777"
                d="M12.172 12l-2.83-2.827 1.415-1.415L15 12l-4.243 4.243-1.414-1.415L12.172 12z"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
