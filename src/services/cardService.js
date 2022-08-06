import { dbConnect } from "../dbConnect";
import Card from "../models/cardModel";

export async function getAllCards() {
  await dbConnect();

  const cards = await Card.find();

  return cards.map(({ id, content, author }) => {
    return { id, content, author };
  });
}
