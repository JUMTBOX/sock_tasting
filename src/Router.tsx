import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Board from "./pages/BoardPage";
import WriteArticle from "./pages/WriteArticlePage";
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
