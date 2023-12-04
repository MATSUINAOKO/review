const setUpServer = () => {
  const express = require("express");
  // const path = require("path"); //package.jsonより上層のディレクトリを見る場合必要なライブラリ
  const app = express();
  const knex = require("./knex");
  const cors = require("cors");
  //5173ポートからのリクエストは受け付ける設定
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  app.use(express.json());
  // app.use(express.static(path.resolve(__dirname, "..", "dist")));
  app.use(express.static("../client/demo/dist"));

  app.get("/api/v1/todo", (req, res) => {
    console.log("getリクエストが来ました");
    knex("lists")
      .select()
      .then((result) => {
        // res.header("Content-Type", "application/json");
        console.log("result :", result);
        res.send(result);
      });
  });
  return app;
};
module.exports = setUpServer; //testするため
