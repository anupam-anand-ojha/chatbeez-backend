import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
     isDelivered:{
        type:Boolean,
        default:false
    },

    isSeen:{
        type:Boolean,
        default:false
    }

  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("message", messageSchema);

export default messageModel;