const express = require("express");
const cors = require("cors");
const chartController = require("./src/controllers/chart");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

const db = require("./src/models");
db.sequelize.sync();

app.use(express.urlencoded({ extended: true }));

app.get("/bar", chartController.getBarChart);

app.get("/chart", chartController.getChart);

app.get("/pie", chartController.getPieChart);

app.post("/chart", chartController.createChart);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;