import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
const Pagination = ({ handleChange, itemsPerPage, length, page }) => {
  const [totalPage, setTotalPage] = useState(Math.floor(length / itemsPerPage));

  useEffect(() => {
    setTotalPage(Math.floor(length / itemsPerPage));
  }, [length, itemsPerPage]);

  return (
    <form className="flex items-center gap-2">
      <label className="text-sm font-medium">Page:</label>

      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={() => handleChange(1)}
          disabled={page === 1}
          className={`${styles.btn} ${
            page === 1 ? styles["btn-disabled"] : styles["btn-default"]
          }`}
        >
          First
        </button>

        <button
          type="button"
          onClick={() => handleChange(page - 1)}
          disabled={page === 1}
          className={`${styles.btn} ${
            page === 1 ? styles["btn-disabled"] : styles["btn-default"]
          }`}
        >
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleChange(num)}
            className={`${styles.btn} ${
              num === page ? styles["btn-active"] : styles["btn-default"]
            }`}
          >
            {num}
          </button>
        ))}

        <button
          type="button"
          onClick={() => handleChange(totalPage)}
          disabled={page === totalPage}
          className={`${styles.btn} ${
            page === totalPage ? styles["btn-disabled"] : styles["btn-default"]
          }`}
        >
          Last
        </button>

        <button
          type="button"
          onClick={() => handleChange(page + 1)}
          disabled={page === totalPage}
          className={`${styles.btn} ${
            page === totalPage ? styles["btn-disabled"] : styles["btn-default"]
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Pagination;
