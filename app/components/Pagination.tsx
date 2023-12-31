import React from "react";
import { SetterOrUpdater } from "recoil";

type Props = {
  currentPage: number;
  numOfPages: number;
  setNumOfCurrentPage: SetterOrUpdater<number>;
};

export const Pagination = ({
  currentPage,
  numOfPages,
  setNumOfCurrentPage,
}: Props) => {
  const handleClick = (i: number) => {
    setNumOfCurrentPage(i);
    //ページネーションをクリックしたらページの一番上までスクロール
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
