export default function WriteArticle() {
  return (
    <div className="form_container">
      <form action="/">
        <div className="form_title">
          <h3>제목</h3>
          <input type="text" required />
        </div>
        <div className="form_content">
          <h3>내용</h3>
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={10}
            required
          ></textarea>
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}
