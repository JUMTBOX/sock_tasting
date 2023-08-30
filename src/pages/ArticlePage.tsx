import axios from "axios";
import { useGetOneArticle } from "../request/boardRequest";
import { Link, Params, useNavigate, useParams } from "react-router-dom";
import "../styles/pages/ArticlePage.css";
import { useQueryClient } from "@tanstack/react-query";

export default function ArticlePage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const params = useParams<Params<string>>();
  const { data } = useGetOneArticle(params);

  const handleDelete = async () => {
    const { status } = await axios.delete(
      `http://localhost:8080/board/delete/${params.id}`
    );

    if (status === 200) {
      queryClient.invalidateQueries(["articles"]);
      navigate("/board");
    }
  };

  return (
    <div className="article_container">
      <div className="article_box">{data?.content}</div>
      <Link to={`/board/${params.id}/modify`}>수정하기</Link>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
}
