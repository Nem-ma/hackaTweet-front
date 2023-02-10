import styles from "../styles/Trends.module.css";
import Link from "next/link";
function Trends() {
  const arr = [
    "foot",
    "manger",
    "foot",
    "manger",
    "foot",
    "manger",
    "manger",
    "manger",
    "piscine",
    "foot",
  ];

  const occurrences = arr.reduce(function (arr, value) {
    return arr[value] ? ++arr[value] : (arr[value] = 1), arr;
  }, {});
  let trendList = [];
  Object.entries(occurrences).forEach(([key, value]) => {
    trendList.push(
      <Link href={"/hashtag/" + key}>
        <div className={styles.row}>
          <h4>#{key}</h4>
          <p>{`${value} Tweet`}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Trends</h1>
      </div>
      <div className={styles.list}>{trendList.sort()}</div>
    </div>
  );
}

export default Trends;
