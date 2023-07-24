import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <h3>リポジトリ名</h3>
      </div>
      <div>url</div>
      <div>
        <p>プロジェクト言語</p>
        <div>123</div>
      </div>
      <ul>
        <li>
          <p>Star</p>
          <p>1</p>
        </li>
        <li>
          <p>Watcher</p>
          <p>1</p>
        </li>
        <li>
          <p>Fork</p>
          <p>1</p>
        </li>
        <li>
          <p>Issue</p>
          <p>1</p>
        </li>
      </ul>
    </div>
  );
};

export default page;
