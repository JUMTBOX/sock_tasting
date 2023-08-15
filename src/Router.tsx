import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" Component={Main} />
    </Routes>
  );
}
