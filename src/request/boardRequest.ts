import axios from "axios";
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Params } from "react-router-dom";

export interface GetBoardData {
  article_id: number;
  title: string;
  author: string;
  content: string;
  created_at: string;
}

export interface SendBoardData {
  title: string;
  author: string;
  content: string;
}
const getArticle = async (): Promise<[GetBoardData]> => {
  const { data } = await axios.get("http://localhost:8080/board/");

  return data;
};

const getOneArticle = async (params: Params<string>): Promise<GetBoardData> => {
  const { data } = await axios.get(`http://localhost:8080/board/${params.id}`);
  return data;
};

const createArticle = async (args: SendBoardData): Promise<number> => {
  const { status } = await axios.post("http://localhost:8080/board/write", {
    title: args.title,
    author: args.author,
    content: args.content,
  });

  if (status === 200) window.alert("포스팅 성공!");
  return status;
};

//custom hook
const useGetAllArticle = (): UseQueryResult<[GetBoardData]> => {
  return useQuery(["articles"], getArticle, {
    staleTime: 2 * 60 * 1000,
  });
};
//---------------------------------------------------------------------
const useGetOneArticle = (
  params: Params<string>
): UseQueryResult<GetBoardData> => {
  return useQuery(["article"], () => getOneArticle(params), {});
};
//---------------------------------------------------------------------
const useCreateArticle = (): UseMutationResult<any, any, SendBoardData> => {
  const queryClient = useQueryClient();

  return useMutation((args: SendBoardData) => createArticle(args), {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });
};
//---------------------------------------------------------------------

export { useGetAllArticle, useGetOneArticle, useCreateArticle };
