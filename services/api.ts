const urlBase = "https://swapi.dev/api";

//

const basicFetch = async endpoint => {
  const req = await fetch(`${urlBase}${endpoint}`);
  const json = req.json();

  return json;
};

export default {
  async getStarsWars(): Promise<any> {
    return await basicFetch(`/people/`);
  }
};
