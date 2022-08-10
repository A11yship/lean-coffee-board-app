export default function Card({ content, author }) {
  return (
    <div style={{ border: "1px solid black", width: "300px" }}>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
}
