import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/pokemonPage";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PageComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });
  afterEach(() => {
    wrapper.unmount()
  });

  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de llamar mixPokemonArray al montar", () => {
    const mixPokemonsArray = jest.spyOn(
      PokemonPage.methods,
      "mixPokemonsArray"
    );
    const wrapper = shallowMount(PokemonPage); 

    expect(mixPokemonsArray).toHaveBeenCalled();
  });

  test("Debe de hacer match con el spanshot cuando cargan los pokemons", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe de mostrar los componentes de pokemonPicture y pokemonOptions", async() => {
    //todo: debe de existir
    const wrapper =  shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });

    const pokemonPicture =  wrapper.find("pokemon-picture-stub");
    const pokemonOptions = wrapper.find("pokemon-options-stub");

    expect(pokemonPicture.exists()).toBeTruthy();
    expect(pokemonOptions.exists()).toBeTruthy();

    //* pokemonPicture atrribute pokemonId === 1*/

    const pokemonIdPicture = pokemonPicture.attributes("pokemonid");
    expect(pokemonIdPicture).toBe("1");

    //* pokemonOptions atrribute pokemons toBe true === 1*/

    const pokemons = pokemonOptions.attributes("pokemons");
    expect(pokemons).toBeTruthy();
  });

  test("pruebas con checkAnswer", async() => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });

    //Propiedades Reactivas de vue
    await wrapper.vm.checkAnswer(1);
    expect(wrapper.vm.showPokemon).toBe(true);

    expect(wrapper.vm.message).toBe(`Correcto: El pokemon es ${pokemonsMock[0].name}`);

    // await wrapper.vm.checkAnswer(100);
    // expect(wrapper.vm.message).toBe(`Incorrecto: El pokemon es ${pokemonsMock[0].name}`);
    // console.log(wrapper.vm.message);

  });

 
});
