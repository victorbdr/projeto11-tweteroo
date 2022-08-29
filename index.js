import express from "express";
import cors from "cors";
const server = express();
server.use(express.json());
server.use(cors());
const login = [];
const tweets = [];
server.post("/sign-up", (request, response) => {
  const { username, avatar } = request.body;
  const user = { username: username, avatar: avatar };
  login.push(user);
  response.send("Ok");
});
server.post("/tweets", (request, response) => {
  const { username, tweet } = request.body;
  const tweeted = login.find((user) => user.username === username);
  const sendTweet = {
    username: username,
    avatar: tweeted.avatar,
    tweet: tweet,
  };
  tweets.push(sendTweet);
  response.send("Ok");
});
server.get("/tweets", (request, response) => {
  const allTweets = tweets.slice(-10);
  allTweets.reverse();
  response.send(allTweets);
});
server.listen(5000);
