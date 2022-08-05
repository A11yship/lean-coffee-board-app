import Head from "next/head";

import AddButton from "../src/components/AddButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lean Coffee Board</title>
      </Head>

      <main>
        <h1>Lean Coffee Board</h1>
        <AddButton>Add new Card</AddButton>
      </main>
    </>
  );
}
