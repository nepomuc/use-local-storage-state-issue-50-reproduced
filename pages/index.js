import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const [introductionFinished, setIntroductionFinished] = useLocalStorageState(
    "introductionFinished",
    {
      ssr: true,
      defaultValue: false,
    }
  );

  const router = useRouter();

  const finishIntroduction = () => {
    setIntroductionFinished(true);
    router.push("/page-2");
  };

  const handleContinueClick = (e) => {
    finishIntroduction();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is the introduction page.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        {introductionFinished ? (
          <Link href="/page-3">
            <button className="btn btn-primary">
              introductionFinished is already true. Go to page 3.
            </button>
          </Link>
        ) : (
          <button onClick={handleContinueClick} className="btn btn-primary">
            Save introductionFinished:true to local storage and continue to page
            2.
          </button>
        )}
      </main>
    </div>
  );
}
