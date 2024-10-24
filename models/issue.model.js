import { Schema, model } from "mongoose";

const issueSchema = new Schema(
  {
    issue: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const IssueModel = model("Issue", issueSchema);

export default IssueModel;
