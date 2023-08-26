import { Link } from "react-router-dom";
import "../../styles/components/board/ArticleItem.css";

export interface ArticleItemInfo {
  article_id: string;
  title: string;
  author: string;
}

export default function ArticleItem({
  article_id,
  title,
  author,
}: ArticleItemInfo) {
  return (
    <Link to={`/board/article/${article_id}`} className="articleItem">
      <div></div>
      <div className="articleItem_title">{title}</div>
      <div className="articleItem_author">{author}</div>
    </Link>
  );
}
