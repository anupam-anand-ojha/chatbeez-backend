import messageModel from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const sender = req.user.id;
    const { receiver, text } = req.body;

    const message = await messageModel.create({
      sender,
      receiver,
      text,
    });

    return res.status(201).json(message);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const myId = req.user.id;
    const otherUserId = req.params.userId;

    const messages = await messageModel.find({
      $or: [
        {
          sender: myId,
          receiver: otherUserId,
        },
        {
          sender: otherUserId,
          receiver: myId,
        },
      ],
    });

    return res.status(200).json(messages);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};