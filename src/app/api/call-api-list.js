function toggleList() {
    const pokemonList = document.getElementById('pokemon-list');

    // Verifica si la lista está visible o no
    if (pokemonList.style.display === 'none' || pokemonList.style.display === '') {
        // Si está oculta, la muestra
        pokemonList.style.display = 'block';
        showList();
    } else {
        // Si está visible, la oculta
        pokemonList.style.display = 'none';
    }
};



function showList() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
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

export { showList, toggleList };