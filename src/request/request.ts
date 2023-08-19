import axios from "axios";
import { useQuery, useMutation, UseQueryResult } from "@tanstack/react-query";

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

const getOneArticle = async (): Promise<BoardData> => {
  const { data } = await axios.get("http://localhost:8080/board/:id");
  return data;
};

const createArticle = async (): Promise<number> => {
  const { status } = await axios.post("http://localhost:8080/board/write");

  if (status === 200) window.alert("수정이 완료되었습니다.");
  return status;
};

//custom hook
const useGetAllArticle = (): UseQueryResult<[BoardData]> => {
  return useQuery(["articles"], getArticle, {
    staleTime: 2 * 60 * 1000,
  });
};
//---------------------------------------------------------------------
const useGetOneArticle = (): UseQueryResult<BoardData> => {
  return useQuery(["article"], getOneArticle, {
    staleTime: 2 * 60 * 1000,
  });
};
//---------------------------------------------------------------------

export { useGetAllArticle, useGetOneArticle };
