const launch = require("../controllers").launch;

module.exports = app => {
  app.post("/api/launch", launch.post);
  app.get("/api/launch/:id", launch.getId);
  app.get("/api/launches", launch.get);
  app.delete("/api/launch/:id", launch.destroy);
  app.put("/api/launch/:id", launch.update);
};
