import Main from "./components/Main";
import Board from "./components/board/Board";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/board" Component={Board} />
    </Routes>
  );
}
