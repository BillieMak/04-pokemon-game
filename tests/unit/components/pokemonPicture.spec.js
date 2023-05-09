import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";

describe("Pruebas en Pokemon Picture", () => {
  test("Debe hacer match con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const imgs = wrapper.findAll("img");
    expect(imgs).toHaveLength(1);

    const [img1] = imgs;

    expect(img1.classes("hidden-pokemon")).toBeTruthy();
  });

  test("Debe mostrar el pokemon si showPokemon:true", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const imgs = wrapper.findAll("img");
    expect(imgs).toHaveLength(2);

    const [img1, img2] = imgs;
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img2.classes("show-pokemon")).toBeFalsy();
    expect(img2.classes("fade-in")).toBeTruthy();
    expect(img2.attributes("src")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg");
  });
});
