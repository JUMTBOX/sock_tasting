import { useGetOneArticle } from "../request/boardRequest";
import { Params, useParams } from "react-router-dom";

import "../styles/pages/ArticlePage.css";

export default function ArticlePage() {
  const params = useParams<Params<string>>();
  const { data } = useGetOneArticle(params);

  return (
    <div className="article_container">
      <div className="article_box">{data?.content}</div>
    </div>
  );
}
