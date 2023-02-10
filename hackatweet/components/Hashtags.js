import styles from "../styles/Hashtags.module.css";
import { useState } from "react";

function Hashtags() {
  const [searchHashtag, setSearchHashtag] = useState("");

  return (
    <div className={styles.content}>
      <div className={styles.inputContainer}>
        <h1>Hashtag</h1>
        <div className={styles.cheatInput}>
          <span>#</span>
          <input
            type="text"
            className={styles.inputZone}
            value={searchHashtag}
            onChange={(e) => setSearchHashtag(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Hashtags;
