import { useNavigate } from "react-router-dom";
import { useGetAllArticle } from "../request/boardRequest";
import ArticleItem from "../components/board/ArticleItem";
import "../styles/pages/BoardPage.css";

export default function Board() {
  const { data } = useGetAllArticle();
  const navigate = useNavigate();

  return (
    <>
      <div className="board_container" data-testid="board_container">
        <button
          className="to_writeBtn"
          onClick={() => navigate("/board/write")}
        >
          글 쓰기
        </button>
        <div className="board_box shadow-xl">
          {data === undefined ? (
            <div className=" text-white">Loading progressive page</div>
          ) : (
            <>
              {data.map((el, idx) => {
                return (
                  <ArticleItem
                    title={el.title}
                    author={el.author}
                    id={el.article_id}
                    key={idx}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
