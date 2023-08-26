import { useNavigate } from "react-router-dom";
import { useGetAllArticle } from "../request/boardRequest";
import ArticleItem from "../components/board/ArticleItem";
import "../styles/pages/BoardPage.css";

export default function Board() {
  const { data } = useGetAllArticle();
  const navigate = useNavigate();

  return (
    <div
      className="board_container flex justify-center"
      data-testid="board_container"
    >
      <div className="board_box  bg-slate-500 shadow-md">
        {data === undefined ? (
          <div className=" text-white">Loading progressive page</div>
        ) : (
          <>
            {data.map((el, idx) => {
              return (
                <ArticleItem
                  article_id={el.article_id}
                  title={el.title}
                  author={el.author}
                  key={idx}
                />
              );
            })}
          </>
        )}
        <button
          className="to_writeBtn"
          onClick={() => navigate("/board/write")}
        >
          글 쓰기
        </button>
      </div>
    </div>
  );
}
