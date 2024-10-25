import {
  createNewTicket,
  fetchAllIssues,
  seedIssue,
} from "../services/ticket.services.js";
import generateTickerId from "../utils/idGenerator.js";
import IssueModel from "../models/issue.model.js";

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
      .status(400)
      .json({ message: "An error occurred while creating the ticket" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};

export const seedIssueCategory = async (req, res) => {
  try {
    const { categories } = req.body;

    if (!categories) {
      return res.status(400).json({ message: "Issue categories are required" });
    }

    const issue = await seedIssue(categories);
    if (issue) {
      res.status(201).json({ message: "Issue categories seeded successfully" });
      return;
    }

    res.status(400).json({
      message: "An error occurred while seeding the issue categories",
    });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};

export const getAllIssueCategory = async (req, res) => {
  try {
    const issues = await fetchAllIssues();
    if (!issues) {
      res.status(201).json({ message: "Issue categories not found" });
      return;
    }

    res.status(200).json(issues);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};
