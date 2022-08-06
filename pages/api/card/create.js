import { dbConnect } from "../../../src/dbConnect";
import Card from "../../../src/models/cardModel";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    const data = JSON.parse(request.body);

    await Card.create(data);

    response.status(200).json({
      message: "card created",
    });
  }
}
