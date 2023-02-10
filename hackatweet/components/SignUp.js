import styles from "../styles/Modal.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "../reducers/user";

function SignUp({ setShowSignUp }) {
  const [singUpUsername, setSignUpUsername] = useState("");
  const [singUpPassword, setSignUpPassword] = useState("");
  const [singUpFirstname, setSignUpFirstname] = useState("");
  const dispatch = useDispatch();

  function SignUp() {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify({
        firstname: singUpFirstname,
        username: singUpUsername,
        password: singUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            currentUser({
              token: data.token,
              username: data.username,
              firstname: data.firstname,
            })
          );
          return <Navigate replace to="/home" />;
        }
      });
  }

  return (
    <div className={styles.modale}>
      <div className={styles.header}>
        <img src="/logoT.png" style={({ width: "50px" }, { height: "50px" })} />
      </div>
      <h3>Connect to Hackatweet</h3>
      <input
        type="text"
        placeholder="Firstname"
        onChange={(e) => setSignUpFirstname(e.target.value)}
        value={singUpFirstname}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={singUpUsername}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={singUpPassword}
      />
      <button onClick={() => SignUp()}>Sign up </button>
    </div>
  );
}

export default SignUp;
