import { Link } from "react-router-dom";
import "../../styles/components/board/ArticleItem.css";

export interface ArticleItemInfo {
  title: string;
  author: string;
  id: number;
}

export default function ArticleItem({ title, author, id }: ArticleItemInfo) {
  return (
    <Link to={`/board/${id}`} className="articleItem">
      <div></div>
      <div className="articleItem_title">{title}</div>
      <div className="articleItem_author">{author}</div>
    </Link>
  );
}
