
const fetchPokemon = async (pokeName) => {

const pokeApiDetails = `https://pokeapi.co/api/v2/pokemon/${pokename}/`;

fetch(pokeApiDetails)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json)
    });

    const data = await res.json();

    let pokemon = {
        name: data.name,
        image: data.sprites['front_default'],
        type: data.types.map((type) => type.type.name).join(", "),
        id: data.id,
        attack: data,
        baseExperience: data.base_experience,
    };

    return pokemon;
};


export { fetchPokemon };