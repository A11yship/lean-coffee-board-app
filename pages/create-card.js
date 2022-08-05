export default function CreatCard() {
  return (
    <>
      <h1>Creat new Card</h1>
      <form>
        <label htmlFor="inputContent"></label>
        <input
          type="text"
          id="inputContent"
          placeholder="I want to talk about ..."
          required
        />
        <label htmlFor="inputAuthor"></label>
        <input type="text" id="inputAuthor" placeholder="Jane Doe" required />
        <button>Submit</button>
      </form>
    </>
  );
}
