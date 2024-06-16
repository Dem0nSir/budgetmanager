import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
        <h1 className="me-auto fs-4 mx-4 d-flex ">
          Expenses{" "}
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="tooltip-top">
                <span>Added expenses will be displayed here.</span>
              </Tooltip>
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5A5A5A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle mx-2 mt-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 9h.01" />
              <path d="M11 12h1v4h1" />
            </svg>
          </OverlayTrigger>
        </h1>
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
                {expenses && expenses.length > 0 ? (
                  expenses.map((budget, index) => (
                    <tr key={budget.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{budget.description}</td>
                      <td>NPR {budget.amount}</td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan="3" className="text-center">
                        <img
                          src="/EmptyState/9276421.jpg"
                          className="mx-auto"
                          style={{ width: "50%", height: "100%" }}
                          alt="No data available"
                        />
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
