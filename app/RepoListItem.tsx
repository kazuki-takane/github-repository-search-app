import React from "react";

type Props = {
  repo: any;
};

export const RepoListItem = ({repo}: Props) => {
  return (
    <li>
      <h3>リポジトリ名</h3>
      <p>オーナー名</p>
      <p>{repo.full_name}</p>
    </li>
  );
};
