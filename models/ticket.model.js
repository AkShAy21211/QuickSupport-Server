import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TicketModel = model("Ticket", ticketSchema);

export default TicketModel;
