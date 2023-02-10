import { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Modal from "react-modal";
function Login() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  function toggleModalIn() {
    setShowSignIn(!showSignIn);
    console.log(showSignIn);
  }
  function toggleModal() {
    setShowSignUp(!showSignUp);
  }
  return (
    <div className={styles.accueil}>
      <div className={styles.imageLeft}>
        <img
          src="/logoT.png"
          // style={({ width: "350px" }, { height: "350px" })}
        />
      </div>
      <div className={styles.contentRight}>
        <img src="/logoT.png" style={({ width: "50px" }, { height: "50px" })} />
        <h1>See what's happening</h1>
        <h2>Join Hackatweet today</h2>
        <div className={styles.btn}>
          <button className={styles.signup} onClick={() => toggleModal()}>
            Sign up
          </button>
          <Modal
            isOpen={showSignUp}
            onRequestClose={toggleModal}
            ariaHideApp={false}
            contentLabel="Sign Up"
            className={styles.mymodal}
            overlayClassName={styles.myoverlay}
          >
            <div className={styles.btnClose}>
              <span onClick={() => toggleModal()}>X</span>
            </div>
            <div>
              <SignUp />
            </div>
          </Modal>
          <p>Already have account</p>
          <button className={styles.signin} onClick={() => toggleModalIn()}>
            Sign in
          </button>
          <Modal
            isOpen={showSignIn}
            onRequestClose={toggleModalIn}
            ariaHideApp={false}
            contentLabel="Sign In"
            className={styles.mymodal}
            overlayClassName={styles.myoverlay}
          >
            <div>
              <div className={styles.btnClose}>
                <span onClick={() => toggleModalIn()}>X</span>
              </div>
              <SignIn />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Login;
