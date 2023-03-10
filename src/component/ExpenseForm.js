import React from "react";

import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  edit,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 1000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="sumit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend />
      </button>
    </form>
  );
};

export default ExpenseForm;
