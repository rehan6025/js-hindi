document.getElementById('js-search-button').addEventListener('click', () => {
    const pokemonNumber = document.getElementById('js-pokemon-number').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    if (!pokemonNumber) {
        resultDiv.innerHTML = 'Please enter a valid Pokémon number';
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            return response.json();
        })
        .then(data => {
            const pokemonName = data.name;
            const pokemonImage = data.sprites.front_default;
            const pokemonAbilities = data.abilities.map(ability => ability.ability.name).join(', ');

            resultDiv.innerHTML = `
                <h2>${pokemonName}</h2>
                <img src="${pokemonImage}" alt="${pokemonName}" />
                <p><strong>Abilities:</strong> ${pokemonAbilities}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>${error.message}</p>`;
        });
});
