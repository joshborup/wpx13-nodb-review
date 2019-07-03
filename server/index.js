const express = require("express");
const app = express();
const {
  cheetahAllPlayers,
  beaverDam
} = require("./controller/playerController");
const playerController = require("./controller/playerController");
// express.json() allows us to recieve and parse body requests
app.use(express.json());

app.get("/api/cheetah", cheetahAllPlayers);
app.post("/api/woodpecker", playerController.woodpeckerPlayer);
app.put("/api/beaver/:id", beaverDam);
app.delete("/api/vulture/:id");

const port = 3008;
app.listen(port, () =>
  console.log(`server listening on port ${port} bro!!! 🏄`)
);
