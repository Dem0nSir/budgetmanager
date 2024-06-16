import React, { useEffect, useState } from "react";

const IncomeTable = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const storedBudgets = localStorage.getItem("budgets");
    if (storedBudgets) {
      setBudgets(JSON.parse(storedBudgets));
    }
  }, []);
  return (
    <>
    <div className="mb-4 mx-2 mt-4">
      <h1 className=" fs-4 mx-4 mb-2 ">Income </h1>
      <div class="mx-4 mb-8">
        <div className="d-flex justify-content-between align-items-baseline fw-normal">
          <table class="table table-hover m-8">
            <thead>
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Income</th>
                <th scope="col">Amount</th>
                {/* <th scope="col">Handle</th> */}
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget, index) => (
                <tr key={budget.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{budget.name}</td>
                  <td>NPR {budget.max}</td>
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

export default IncomeTable;
