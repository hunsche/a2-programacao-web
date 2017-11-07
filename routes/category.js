const category = require("../controllers").category;

module.exports = app => {
  app.post("/categorias", category.post);
  app.get("/categorias/:id", category.getId);
  app.get("/categorias", category.get);
  app.delete("/categorias/:id", category.destroy);
  app.put("/categorias/:id", category.update);
};
