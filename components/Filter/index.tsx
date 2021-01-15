import React, { useState } from "react";
import { useStarwars } from "../../contexts/persons";
import "./styles.css";

const Filter: React.FC = () => {
  const { filterStarwars } = useStarwars();

  const handleFilter = async (filter: string) => {
    await filterStarwars(filter);
  };

  return (
    <div className="container-filter">
      <div className="content-filter">
        <div className="filter-input">
          <div className="input-container">
            <input
              onChange={e => {
                handleFilter(e.target.value);
              }}
              className="input-field"
              placeholder="Digite o nome do personagem"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
