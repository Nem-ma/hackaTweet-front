import styles from "../styles/Modal.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function SignIn({ setShowSignIn }) {
  const [singInUsername, setSignInUsername] = useState("");
  const [singInPassword, setSignInPassword] = useState("");

  function SignIn() {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify({
        username: singInUsername,
        password: singInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
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
        placeholder="Username"
        onChange={(e) => setSignInUsername(e.target.value)}
        value={singInUsername}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setSignInPassword(e.target.value)}
        value={singInPassword}
      />
      <button onClick={() => SignIn()}>Sign in </button>
    </div>
  );
}

export default SignIn;
