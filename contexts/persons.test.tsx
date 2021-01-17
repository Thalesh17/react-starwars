import api from "../services/api";

describe("Starwars", () => {
  test("Should call API and show only 10 items", async () => {
    const items = await api.getStarsWars();

    expect(items.length).toEqual(10);
  });
});
