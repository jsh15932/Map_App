import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";

export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logo">
        <Room className="logoIcon" />
        <span>Mapsite</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="username" ref={usernameRef} />
        <input type="email" placeholder="email" ref={emailRef} />
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="registerBtn" type="submit">
          회원가입
        </button>
        {success && (
          <span className="success">회원가입이 성공적으로 처리되었습니다.</span>
        )}
        {error && <span className="failure">오류 발생</span>}
      </form>
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}