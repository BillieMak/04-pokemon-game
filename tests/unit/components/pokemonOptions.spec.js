import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("Pruebas en PokemonOptions.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemonsMock,
      },
    });
  });
  test("Debe de hacer match con el spanpshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar las 4 opciones Correctamente", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags).toHaveLength(4);

    expect(liTags.at(0).text()).toBe("bulbasaur");
    expect(liTags.at(1).text()).toBe("ivysaur");
    expect(liTags.at(2).text()).toBe("venusaur");
    expect(liTags.at(3).text()).toBe("charmander");
  });

  test('Debe de emitir "selection con sus respectivos parametros"', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    li1.trigger("click");

    expect(wrapper.emitted().selection).toBeTruthy();
  });
});
