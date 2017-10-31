module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "API OK *-*"
    })
  );

  require('./category')(app);
  require('./launch')(app);  
};
