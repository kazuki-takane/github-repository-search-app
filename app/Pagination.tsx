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
  };
  console.log(currentPage);
  console.log(numOfPages);

  return (
    <ul className="flex">
      {[...Array(numOfPages)].map((_, i) =>
        currentPage === i ? (
          <li className="ml-8 bg-slate-300 cursor-pointer" key={i} onClick={() => handleClick(i)}>
            {i + 1}
          </li>
        ) : (
          <li className="ml-8 cursor-pointer" key={i} onClick={() => handleClick(i)}>
            {i + 1}
          </li>
        )
      )}
    </ul>
  );
};
