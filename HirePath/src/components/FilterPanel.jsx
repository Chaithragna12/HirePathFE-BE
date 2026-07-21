import { useState } from "react";
import "./FilterPanel.css";

const FilterPanel = ({ onFilter }) => {
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter({
      salary,
      category,
    });
  };

  return (
    <div className="filter-panel">
      <h2>Filters</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="it-jobs">IT</option>
        <option value="engineering-jobs">Engineering</option>
        <option value="sales-jobs">Sales</option>
        <option value="marketing-jobs">Marketing</option>
      </select>

      <input
        type="number"
        placeholder="Minimum Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <button onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;