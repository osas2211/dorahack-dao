import { ProposalI } from "@/interface/proposals";
import { model, models, Schema } from "mongoose";

const proposalSchema = new Schema<ProposalI>({
  creator_address: { type: String, required: true },
  recipient_address: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  theme: { type: String, required: true },
  date_submitted: { type: String, required: true },
  end_date: { type: String, required: true },
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "rejected"],
    default: "pending",
    required: true,
  },
  priority: {
    type: String,
    enum: ["urgent", "low", "high", "medium"],
    default: "low",
    required: true,
  },
  email: { type: String, required: false },
});

const ProposalModel =
  models.ProposalModal || model<ProposalI>("ProposalModel", proposalSchema);

export default ProposalModel;
