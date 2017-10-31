const category = require("../controllers").category;

module.exports = app => {
  app.post("/api/category", category.post);
  app.get("/api/category/:id", category.getId);
  app.get("/api/categories", category.get);
  app.delete("/api/category/:id", category.destroy);
  app.put("/api/category/:id", category.update);
};
