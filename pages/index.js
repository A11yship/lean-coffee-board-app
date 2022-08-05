import Head from "next/head";
import { useRouter } from "next/router";

import AddButton from "../src/components/AddButton";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lean Coffee Board</title>
      </Head>

      <main>
        <h1>Lean Coffee Board</h1>
        <AddButton onClick={() => router.push("/create-card")}>
          Add new Card
        </AddButton>
      </main>
    </>
  );
}
