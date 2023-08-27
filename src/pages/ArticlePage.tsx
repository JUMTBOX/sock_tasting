import { useEffect } from "react";
import { useGetOneArticle } from "../request/boardRequest";
import { Params, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function ArticlePage() {
  const params = useParams<Params<string>>();
  const { data } = useGetOneArticle(params);

  useEffect(() => {}, [params]);

  return (
    <div>
      <div className="text-white">{data?.content}</div>
    </div>
  );
}
