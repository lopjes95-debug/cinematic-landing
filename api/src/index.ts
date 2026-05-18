import http from "http";
import { health } from "./routes/health";
import { users } from "./routes/users";
import { sessions } from "./routes/sessions";
import { feed } from "./routes/feed";
import { upload } from "./routes/upload";

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/health") return health(req, res);
  if (url === "/users") return users(req, res);
  if (url === "/sessions") return sessions(req, res);
  if (url === "/feed") return feed(req, res);
  if (url === "/upload") return upload(req, res);

  res.writeHead(404);
  res.end("Not found");
});

server.listen(4000, () => console.log("API running on :4000"));

