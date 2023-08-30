import { useRef } from "react";
import { useCreateArticle } from "../request/boardRequest";
import { useNavigate } from "react-router-dom";
import "../styles/pages/WriteArticlePage.css";

export default function WriteArticle() {
  const navigate = useNavigate();
  const articleRef = useRef<any>([]);
  const { mutateAsync } = useCreateArticle();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let info = {
      title: articleRef.current[0].value,
      author: String(sessionStorage.getItem("userId")).split("@")[0],
      content: articleRef.current[1].value,
    };

    await mutateAsync(info);
    navigate("/board");
  };

  return (
    <div className="form_container shadow-lg">
      <form action="/" className="shadow-lg space-y-10">
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
        <button onClick={handleSubmit}>작성하기</button>
      </form>
    </div>
  );
}
