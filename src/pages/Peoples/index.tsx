import React, { useState, useEffect } from "react";
import { Starwar } from "../../../components/Starwar";
import { useStarwars } from "../../../contexts/persons";
import { StarwarType } from "../../../types/starwar";
import "./styles.css";

export const Peoples: React.FC = () => {
  const { persons } = useStarwars();

  return (
    <div className="container-stars">
      <h3>Starwars</h3>
      <div className="container-persons">
        <div className="content-star">
          {persons &&
            persons.map((person: StarwarType, index) => (
              <Starwar starwar={person} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
