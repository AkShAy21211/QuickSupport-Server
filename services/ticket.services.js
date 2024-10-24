import TicketModel from "../models/ticket.model.js";

export const createNewTicket = async (ticketId, description, category, by) => {
  try {
    const newTicket = new TicketModel({
      ticketId,
      description,
      category,
      by,
    });
    await newTicket.save();
    return newTicket;
  } catch (error) {
    console.error("Error creating new ticket:", error);
  }
};
