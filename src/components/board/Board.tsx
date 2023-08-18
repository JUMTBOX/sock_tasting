import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticle } from "../../request/request";
import "../../styles/components/board/Board.css";

export default function Board() {
  const { data } = useQuery(["articles"], getArticle, {
    refetchOnWindowFocus: true,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <div
      className="board_container w-full h-full flex justify-center"
      data-testid="board_container"
    >
      <div className="board_box w-2/3 h-1/2 bg-slate-500 rounded-md shadow-md flex justify-center">
        {data === undefined ? (
          <div className=" text-white">로딩중</div>
        ) : (
          <div className="article w-4/5 flex-col items-center justify-center space-y-4">
            <div>{data[0].title}</div>
            <div>{data[0].author}</div>
            <div>{data[0].content}</div>
          </div>
        )}
      </div>
    </div>
  );
}
