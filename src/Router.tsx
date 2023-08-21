import Main from "./components/Main";
import Board from "./components/board/Board";
import WriteArticle from "./components/board/WriteArticle";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/board" Component={Board} />
      <Route path="/board/write" Component={WriteArticle} />
    </Routes>
  );
}
