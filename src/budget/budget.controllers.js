const Budget = require("../models/budget.models");
const uuid = require("uuid");

const findBudgetUser = async (id) => {
  console.log(id);
  const data = await Budget.findOne({
    where: {
      user_id: id, // buscar en la columna user_id
    },
  });
  return data;
};

const createbudget = async (budgetObject, userId) => {
  const newBudget = {
    id: uuid.v4(),
    total: Number(budgetObject.total),
    userId: userId,
  };
  const data = await Budget.create(newBudget);
  return data;
};

module.exports = {
  findBudgetUser,
  createbudget,
};
