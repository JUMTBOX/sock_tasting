import Main from "./components/Main";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Board from "./components/board/Board";
import WriteArticle from "./components/board/WriteArticle";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/users/login" Component={Login} />
      <Route path="/users/signup" Component={SignUp} />
      <Route path="/board" Component={Board} />
      <Route path="/board/write" Component={WriteArticle} />
    </Routes>
  );
}
