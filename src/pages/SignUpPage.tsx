import axios from "axios";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { domain } from "../dotenv.js";
import "../styles/pages/SignUpPage.css";

export default function SignUp() {
  const inputRef = useRef<any>([]);
  const navigate = useNavigate();

  const userRegister = async (e: FormEvent): Promise<JSON> => {
    e.preventDefault();
    let id = inputRef.current[0].value;
    let pw = inputRef.current[1].value;
    const { data } = await axios.post(`${domain}/users/signup`, {
      userId: id,
      password: pw,
    });

    if (data === "OK") {
      window.alert("가입 성공!");
      navigate("/users/login");
    } else if (data === "fail") {
      window.alert("이미 가입된 회원 입니다!");
    }
    return data;
  };

  return (
    <div className="signUp_container">
      <div className="signUp-wrapper">
        <form action="/">
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            ref={(el) => (inputRef.current[0] = el)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            ref={(el) => (inputRef.current[1] = el)}
          />
          <button onClick={userRegister}>회원 가입</button>
        </form>
      </div>
    </div>
  );
}
