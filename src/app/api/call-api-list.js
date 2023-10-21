

function showList() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=60') // Cambia el límite según tus necesidades.
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemon-list');
            pokemonList.innerHTML = '';

            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonData => {
                        const pokemonDiv = document.createElement('div');
                        pokemonDiv.innerHTML =
                            `<h2>${pokemonData.name}</h2>
                            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                            <p>Número: ${pokemonData.id}</p>
                            <p>Peso: ${pokemonData.weight} kg</p>
                            <p>Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
                        `;
                        pokemonList.appendChild(pokemonDiv);
                    });
            });
        });
};

export { showList };