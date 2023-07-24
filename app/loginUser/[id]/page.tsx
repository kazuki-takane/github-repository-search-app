import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>{params.id}オーナー名</div>
      </div>
      <ul>
        <li>
            <p>フォロー数</p>
            <p>1</p>
        </li>
        <li>
            <p>フォロワー数</p>
            <p>1</p>
        </li>
        <li>
            <p>bio</p>
            <p>1</p>
        </li>
      </ul>
      <div>
        <p>リポジトリ一覧</p>
        <ul>
            <li>リポジトリ</li>
            <li>リポジトリ</li>
            <li>リポジトリ</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
