const users = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);



    socket.on("join", (userId) => {
      users[userId] = socket.id;
      io.emit("online-users", Object.keys(users));
    });

//send message

    socket.on("send-message", (data) => {

      const receiverSocketId = users[data.receiver];

      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive-message",data );
      }
    });

//user disconnect

    socket.on("disconnect", () => {
      for (const userId in users) {
        if (users[userId] === socket.id) {
          delete users[userId];
          break;
        }
      }
        io.emit("online-users", Object.keys(users));

      console.log("User Disconnected");
    });
  });
};

export default socketHandler;