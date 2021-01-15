import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../services/api";
import { StarwarType } from "../types/starwar";

interface Persons {
  persons: StarwarType[];
  getStarwars(): void;
  filterStarwars(filter: string): void;
}

const PeopleContext = createContext<Persons>({} as Persons);

const PeopleProvider = ({ children }) => {
  const [persons, setPersons] = useState<StarwarType[]>([]);
  const [allPersons, setAllPersons] = useState<StarwarType[]>([]);

  useEffect(() => {
    getStarwars();
  }, []);

  const getStarwars = async (): Promise<void> => {
    let starwars = await api.getStarsWars();
    let data = starwars.results.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    setPersons(data);
    setAllPersons(data);
  };

  const filterStarwars = (filter: string): void => {
    const persons = allPersons.filter(data =>
      data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    console.log(persons);
    setPersons(persons);
  };

  return (
    <PeopleContext.Provider
      value={{
        persons,
        getStarwars,
        filterStarwars
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

function useStarwars() {
  return useContext(PeopleContext);
}

export { PeopleProvider, useStarwars, PeopleContext };
