import IssueModel from "../models/issue.model.js";
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

export const seedIssue = async (issue) => {
  try {
    const newIssue = await IssueModel.insertMany(issue);
    return newIssue;
  } catch (error) {
    console.error("Error creating new ticket:", error);
  }
};
