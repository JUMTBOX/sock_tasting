import { useNavigate } from "react-router-dom";
import { useGetAllArticle } from "../../request/request";
import "../../styles/components/board/Board.css";

export default function Board() {
  const { data } = useGetAllArticle();
  const navigate = useNavigate();

  return (
    <div
      className="board_container w-full h-full flex justify-center"
      data-testid="board_container"
    >
      <div className="board_box w-2/3 h-1/2 bg-slate-500 rounded-md shadow-md flex justify-center">
        {data === undefined ? (
          <div className=" text-white">로딩중</div>
        ) : (
          <div
            className="article w-4/5 flex-col items-center justify-center space-y-4"
            data-testid="article"
          >
            {data.map((el, idx) => {
              return (
                <div key={idx}>
                  <div>{el.title}</div>
                  <div>{el.author}</div>
                  <div>{el.content}</div>
                </div>
              );
            })}
          </div>
        )}
        <button
          onClick={() => {
            navigate("/board/write");
          }}
        >
          글 쓰기
        </button>
      </div>
    </div>
  );
}
