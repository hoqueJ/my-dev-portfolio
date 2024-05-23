import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl text-blue-400">My Portfolio</h1>
    </main>
  );
}
