const createContact = (req, res) => {
  res.status(201).send(`thanks for stopping by ${req.body.name}`);
};

module.exports = { createContact };
