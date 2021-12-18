const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5010;
app.use(cors());
app.use(express.json());
/////////////////////////
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0hdkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//////////////////////////
async function run() {
  try {
    await client.connect();
    // const database = client.db("BlogBD");
    // const blogCollection = database.collection("blogs");
    console.log("database connected successfully");

    //////
    app.post("/blogs", async (req, res) => {
      const blogs = req.body;
      console.log(blogs);
      res.json({ message: "hellooo" });
    });

    ////////////////////////
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
/////////////////////////
app.get("/", (req, res) => {
  res.send("BlogBD");
});

app.listen(port, () => {
  console.log(`listening port : ${port}`);
});
