import React, { useState } from "react";

const FilterComponent = ({ setFilterOpen }) => {
  return (
    <section className="filter_section">
      <h1>Hello world</h1>
      <button onClick={() => setFilterOpen(false)}>close</button>
    </section>
  );
};

export default FilterComponent;
