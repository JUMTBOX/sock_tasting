import React, { useEffect } from "react";

const getArticle = async () => {
  const res = await fetch("http://localhost:8080/board", {
    method: "get",
  });

  const response = await res.json();
  if (res.status === 200) console.log(response);
};

export default function Board() {
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <div
      className="board_container w-full h-full flex justify-center"
      data-testid="board_container"
    >
      <div className="w-2/3 h-1/2 bg-slate-500 rounded-md shadow-md">
        게시판
      </div>
    </div>
  );
}
