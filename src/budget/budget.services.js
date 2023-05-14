const budgetControllers = require("./budget.controllers");

const getMyBudget = (req, res) => {
  const id = req.user.id;
  budgetControllers
    .findBudgetUser(id)
    .then((data) => {
      //? En caso de que data no exista (el presupuesto no exista)
      if (!data) {
        return res
          .status(404)
          .json({ message: `budget with id: ${userId}, not found` });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const postNewBudget = (req, res) => {
  const budgetObj = req.body;
  const userId = req.user.id;
  budgetControllers
    .createbudget(budgetObj, userId)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", error: err });
    });
};

module.exports = {
  postNewBudget,
  getMyBudget,
};
