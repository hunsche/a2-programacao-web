const category = require("../models").Category;

function post(req, res) {
  return category
    .create(req.body)
    .then(category => res.status(201).send(category))
    .catch(error => res.status(400).send(error));
}

function getId(req, res) {
  return category
    .findById(req.params.id)
    .then(category => res.status(200).send(category))
    .catch(error => res.status(400).send(error));
}

function get(req, res) {
  return category
    .findAll()
    .then(categories => res.status(200).send(categories))
    .catch(error => res.status(400).send(error));
}

function destroy(req, res) {
  return category
    .findById(req.params.id)
    .then(category => {
      return category
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

function update(req, res) {
  return category
    .findById(req.params.id)
    .then(categoryItem => {
      return categoryItem
        .update(req.body)
        .then(updatedCategoryItem => res.status(200).send(updatedCategoryItem))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

module.exports = {
  post,
  getId,
  get,
  destroy,
  update
};
