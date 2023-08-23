import LoginForm from "../components/login/LoginForm";
import "../styles/pages/LoginPage.css";

export default function Login() {
  return (
    <div className="login_container w-full h-full flex justify-center space-x-2">
      <div className="text_box w-6/12 h-2/3 rounded-md shadow-lg"></div>
      <LoginForm />
    </div>
  );
}
