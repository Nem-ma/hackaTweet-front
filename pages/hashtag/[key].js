import Hashtags from "../../components/Hashtags";
import Trends from "../../components/Trend";
import Tweet from "../../components/Tweet";
import { useRouter } from "next/router";
import styles from "../../styles/HashtagPage.module.css";
import Link from "next/link";

function HashtagPage() {
  const router = useRouter();
  const { key } = router.query;
  let test = [{ hashag: "tweet" }];
  let arrHash = test
    .filter((tweet) => tweet.hashag === key)
    .map((data) => {
      return <Tweet />;
    });
  return (
    <div className={styles.allPage}>
      <div className={styles.borderRight}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/logoT.png"
              style={({ width: "50px" }, { height: "50px" })}
            />
          </Link>
        </div>
      </div>
      <div></div>
      <div className={styles.topPage}>
        <Hashtags />
        <div className={styles.middlePage}>{key}</div>
      </div>

      <div className={styles.borderleft}>
        <Trends />
      </div>
    </div>
  );
}

export default HashtagPage;
