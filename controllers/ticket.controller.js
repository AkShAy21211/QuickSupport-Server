import { createNewTicket } from "../services/ticket.services.js";
import generateTickerId from "../utils/idGenerator.js";

export const createTicket = async (req, res) => {
  try {
    const { description, category } = req.body;

    if (!description || !category) {
      return res
        .status(400)
        .json({ message: "Description and issue are required" });
    }

    // Generate a ticketId for the new ticket

    const tiecketId = generateTickerId();

    const ticket = await createNewTicket(
      tiecketId,
      description,
      category,
      req.user._id
    );

    if (ticket) {
      res.status(201).json({ message: "Ticket created successfully" });
      return;
    }

    res
      .status(500)
      .json({ message: "An error occurred while creating the ticket" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};
