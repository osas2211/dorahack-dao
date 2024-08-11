import { UserI } from "@/interface/user";
import { model, models, Schema } from "mongoose";

const userSchema = new Schema<UserI>({
  name: { type: String, required: true },
  profileImage: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: false },
  created_at: { type: Date, required: true },
});

const UserModel = models.UserModel || model<UserI>("UserModel", userSchema);

export default UserModel;
