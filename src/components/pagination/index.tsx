import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AdvertismentPage } from "../../app/types";

function Pagination({
  data,
  handlePageChange,
  page,
}: {
  page: number;
  data: AdvertismentPage;
  handlePageChange: (page: number | null) => void;
}) {
  return (
    <div className="flex items-center justify-center">
      <FaAngleLeft
        className={`${
          data.prev ? "fill-blue-400 cursor-pointer" : "fill-gray-700"
        }`}
        onClick={() => handlePageChange(data.prev)}
      />
      <span>{page}</span>
      <FaAngleRight
        className={`${
          data.next ? "fill-blue-400 cursor-pointer" : "fill-gray-700"
        }`}
        onClick={() => handlePageChange(data.next)}
      />
    </div>
  );
}

export default Pagination;
