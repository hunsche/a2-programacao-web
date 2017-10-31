const model = require("../models").Launch;

function post(req, res) {
  return model
    .create(req.body)
    .then(model => res.status(201).send(model))
    .catch(error => res.status(400).send(error));
}

function getId(req, res) {
  return model
    .findById(req.params.id)
    .then(model => res.status(200).send(model))
    .catch(error => res.status(400).send(error));
}

function get(req, res) {
  return model
    .findAll()
    .then(models => res.status(200).send(models))
    .catch(error => res.status(400).send(error));
}

function destroy(req, res) {
  return model
    .findById(req.params.id)
    .then(model => {
      return model
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}

function update(req, res) {
  return model
    .findById(req.params.id)
    .then(modelItem => {
      return modelItem
        .update(req.body)
        .then(updatedModelItem => res.status(200).send(updatedModelItem))
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
