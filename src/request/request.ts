import axios from "axios";

export interface BoardData {
  article_id: string;
  title: string;
  author: string;
  content: string;
}

const getArticle = async (): Promise<[BoardData]> => {
  const { data } = await axios.get("http://localhost:8080/board");

  return data;
};

const createArticle = async (): Promise<number> => {
  const { status } = await axios.post("http://localhost:8080/board/write");

  if (status === 200) window.alert("수정이 완료되었습니다.");
  return status;
};

export { getArticle, createArticle };
