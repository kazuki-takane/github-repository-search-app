import React from "react";

type Props = {
  currentPage: number;
  numOfPages: number;
  setNumOfCurrentPage: any;
};

export const Pagination = ({
  currentPage,
  numOfPages,
  setNumOfCurrentPage,
}: Props) => {
  const handleClick = (i: number) => {
    setNumOfCurrentPage(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  console.log(currentPage);
  console.log(numOfPages);

  return (
    <ul className="flex justify-center items-center mt-8 pb-16">
      {[...Array(numOfPages)].map((_, i) =>
        currentPage === i ? (
          <li
            className="border shadow cursor-pointer rounded-full w-8 h-8 leading-8 mx-2 bg-cyan-400 border-cyan-500 text-white"
            key={i}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </li>
        ) : (
          <li
            className="border shadow cursor-pointer rounded-full w-8 h-8 leading-8 mx-2 bg-white"
            key={i}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </li>
        )
      )}
    </ul>
  );
};
