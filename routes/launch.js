const launch = require("../controllers").launch;

module.exports = app => {
  app.post("/lancamentos", launch.post);
  app.get("/lancamentos/:id", launch.getId);
  app.get("/lancamentos", launch.get);
  app.delete("/lancamentos/:id", launch.destroy);
  app.put("/lancamentos/:id", launch.update);
};
