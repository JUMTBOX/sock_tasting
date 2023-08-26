import { useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { domain } from "../../dotenv";

export default function LoginForm() {
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();

  const userLogin = async (e: React.FormEvent): Promise<JSON> => {
    e.preventDefault();
    let id = inputRef.current[0].value;
    let pw = inputRef.current[1].value;

    const { data } = await axios.post(`${domain}/users/login`, {
      userId: id,
      password: pw,
    });

    if (data === "OK") {
      sessionStorage.setItem("userId", `${id}`);
      navigate("/main");
    } else if (data === "wrongpw") {
      window.alert("비밀번호가 틀립니다");
    } else {
      window.alert("가입되어있지 않은 회원입니다.");
    }
    return data;
  };

  return (
    <form action="/" className="w-2/6 h-2/3 rounded-md shadow-lg space-y-10">
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력해 주세요"
        ref={(el) => (inputRef.current[0] = el)}
      />
      <input
        type="password"
        name="email"
        placeholder="비밀번호를 입력해주세요"
        ref={(el) => (inputRef.current[1] = el)}
      />
      <button type="submit" onClick={userLogin}>
        로그인
      </button>
      <Link to={"/users/signup"}>아직 계정이 없으신가요?</Link>
    </form>
  );
}
