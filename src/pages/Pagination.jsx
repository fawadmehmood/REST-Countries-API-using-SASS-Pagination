import React from "react";
import "../dist/css/pagination.css";

const Pagination = ({
  nextPage,
  prevPage,
  nPages,
  currentPage,
  handleEnterKey,
  handlePageInput,
  pageInput,
}) => {
  const disableBtn = (pageNum) =>
    parseInt(currentPage) === pageNum ? "disabled" : "";

  return (
    <div className="paginationBtns">
      <span>Page</span>

      <input
        type="number"
        value={pageInput}
        onChange={handlePageInput}
        onKeyUp={handleEnterKey}
      />

      <span>of {nPages}</span>
      <button
        className="btnPag btnPrev"
        onClick={prevPage}
        disabled={disableBtn(1)}
      >
        <i className="fa fas fa-chevron-left pagination-arrow"></i>
      </button>
      <button
        className="btnPag btnNext"
        onClick={nextPage}
        disabled={disableBtn(nPages)}
      >
        <i className="fa fas fa-chevron-right pagination-arrow"></i>
      </button>
    </div>
  );
};

export default React.memo(Pagination);
