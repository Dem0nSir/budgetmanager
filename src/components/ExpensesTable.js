import React, { useEffect, useState } from "react";

export const ExpensesTable = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedBudgets = localStorage.getItem("expenses");
    if (storedBudgets) {
      setExpenses(JSON.parse(storedBudgets));
    }
  }, []);
  return (
    <>
    <div className="mb-4 mx-2 mt-4">
      <h1 className="me-auto fs-4 mx-4 d-flex mb-2">Expenses</h1>
      <div class="mx-4 mb-8">
        <div className="d-flex justify-content-between align-items-baseline fw-normal">
          <table class="table table-hover m-8">
            <thead>
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Expense</th>
                <th scope="col">Amount</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              {expenses.map((budget, index) => (
                <tr key={budget.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{budget.description}</td>
                  <td>NPR {budget.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
};
