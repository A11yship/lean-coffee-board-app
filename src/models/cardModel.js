import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  content: { type: String, requiered: true },
  author: { type: String, requiered: true },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
