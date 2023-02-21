import React from "react";

import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
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
          />
        </div>
      </div>
      <button type="sumit" className="btn">
        Submit
        <MdSend />
      </button>
    </form>
  );
};

export default ExpenseForm;