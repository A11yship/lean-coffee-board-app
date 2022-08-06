import { useRouter } from "next/router";
import { useFetch } from "../src/hooks/useFetch";

export default function CreatCard() {
  const router = useRouter();
  const fetchApi = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const content = event.target.inputContent.value;
    const author = event.target.inputAuthor.value;

    await fetchApi("/api/card/create", {
      method: "POST",
      body: JSON.stringify({ content, author }),
    });

    router.push("/");
  }

  return (
    <>
      <h1>Creat new Card</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputContent"></label>
        <input
          type="text"
          id="inputContent"
          name="inputContent"
          placeholder="I want to talk about ..."
          required
        />
        <label htmlFor="inputAuthor"></label>
        <input
          type="text"
          id="inputAuthor"
          name="inputAuthor"
          placeholder="Jane Doe"
          required
        />
        <button>Submit</button>
        <button type="button" onClick={() => router.push("/")}>
          Cancel
        </button>
      </form>
    </>
  );
}
