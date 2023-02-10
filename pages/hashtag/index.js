import Hashtags from "../../components/Hashtags";
import Trends from "../../components/Trend";
import Tweet from "../../components/Tweet";
import styles from "../../styles/HashtagPage.module.css";
// import logo from "../../public/logo.png";
// import Image from "react";
// import { ReactComponent as image } from "../../public/logo.png";

function HashtagHomePage() {
  // store a recuperer ici. Doit contenir la liste des tweets avec leur hashatg
  let test = [{ hashag: "tweet" }];
  let arrHash = test.map((data, i) => {
    return <Tweet key={i} />;
  });

  return (
    <div className={styles.allPage}>
      <div className={styles.borderRight}>
        <div className={styles.logo}>
          <img
            src="/logoT.png"
            style={({ width: "50px" }, { height: "50px" })}
          />
        </div>
      </div>
      <div className={styles.topPage}>
        <Hashtags />
      </div>
      <div className={styles.borderleft}>
        <Trends />
      </div>
    </div>
  );
}

export default HashtagHomePage;
