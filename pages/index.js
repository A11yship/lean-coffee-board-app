import Head from "next/head";
import { useRouter } from "next/router";
import { getAllCards } from "../src/services/cardService";

import AddButton from "../src/components/AddButton";
import Card from "../src/components/Card";

export async function getStaticProps() {
  const cards = await getAllCards();

  return {
    props: { cards },
  };
}

export default function Home({ cards }) {
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
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              <Card content={card.content} author={card.author} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
