import axios from "axios";
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../../dotenv";
import "../../styles/components/login/Login.css";

export default function Login() {
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();

  const userLogin = async (e: FormEvent): Promise<JSON> => {
    e.preventDefault();
    let id = inputRef.current[0].value;
    let pw = inputRef.current[1].value;
    const { data } = await axios.post(`${domain}/users/login`, {
      userId: id,
      password: pw,
    });
    console.log(data);
    if (data === "OK") {
      navigate("/main");
    } else if (data === "wrongpw") {
      window.alert("비밀번호가 틀립니다");
    } else {
      window.alert("가입되어있지 않은 회원입니다.");
    }
    return data;
  };

  return (
    <div className="login_container w-full h-full flex justify-center space-x-2">
      <div className="text_box w-6/12 h-2/3 rounded-md shadow-lg"></div>
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
    </div>
  );
}
