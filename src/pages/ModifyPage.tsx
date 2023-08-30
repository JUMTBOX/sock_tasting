import axios from "axios";
import { useEffect, useRef } from "react";
import { useGetOneArticle } from "../request/boardRequest";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function ModifyPage() {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const articleRef = useRef<any>([]);
  const { data } = useGetOneArticle(params);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    let info = {
      title: articleRef.current[0].value,
      author: String(sessionStorage.getItem("userId")).split("@")[0],
      content: articleRef.current[1].value,
    };
    const { status } = await axios.put(
      `http://localhost:8080/board/modify/${params.id}`,
      info
    );
    if (status === 200) {
      queryClient.invalidateQueries(["articles"]);
      navigate("/board");
    }
  };

  useEffect(() => {
    articleRef.current[0].value = data?.title;
    articleRef.current[1].value = data?.content;
  }, []);

  return (
    <div className="form_container shadow-lg">
      <form action="/" className="shadow-lg space-y-3">
        <div className="form_title space-x-3">
          <h3>제목</h3>
          <input
            type="text"
            required
            ref={(el) => (articleRef.current[0] = el)}
          />
        </div>
        <div className="form_content">
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={10}
            ref={(el) => (articleRef.current[1] = el)}
            required
          ></textarea>
        </div>
        <button onClick={handleSubmit}>수정하기</button>
      </form>
    </div>
  );
}
