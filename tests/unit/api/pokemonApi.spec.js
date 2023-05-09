import pokemonApi from "@/api/pokemonApi";

describe("pokemonApi", () => {
  test("axios deberia estar definido", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
