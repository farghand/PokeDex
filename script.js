const poke_container = document.getElementById('poke_container');
const kanto_dex = 151;
const jhoto_dex = 251;
const hoenn_dex = 386;
const sinnoh_dex = 494;
const unova_dex = 649;
const kalos_dex = 721;
const alola_dex = 809;
const galar_dex = 898;

const colors = {
    fire: '#EE8130',
    grass: '#7AC74C',
    electric: '#F7D02C',
    water: '#6390F0',
    ground: '#E2BF65',
    rock: '#B6A136',
    fairy: '#D685AD',
    poison: '#A33EA1',
    bug: '#A6B91A',
    dragon: '#6F35FC',
    psychic: '#F95587',
    flying: '#A98FF3',
    fighting: '#C22E28',
    normal: '#A8A77A',
    dark: '#705746',
    ice: '#96D9D6',
    steel: '#B7B7CE',
    ghost: '#735797'
}

const main_type = Object.keys(colors);

const fetchKanto = async() => {
    clearPokemon(poke_container);
    for(let i = 1; i <= kanto_dex; i++) {
        await getPokemon(i);
    }
}

const fetchJhoto = async() => {
    clearPokemon(poke_container);
    for(let i = 152; i <= jhoto_dex; i++) {
        await getPokemon(i);
    }

}

const fetchHoenn = async() => {
    clearPokemon(poke_container);
    for(let i = 252; i <= hoenn_dex; i++) {
        await getPokemon(i);
    }
}

const fetchSinnoh = async() => {
    clearPokemon(poke_container);
    for(let i = 387; i <= sinnoh_dex; i++) {
        await getPokemon(i);
    }
}

const fetchUnova = async() => {
    clearPokemon(poke_container);
    for(let i = 495; i <= unova_dex; i++) {
        await getPokemon(i);
    }
}

const fetchKalos = async() => {
    clearPokemon(poke_container);
    for(let i = 650; i <= kalos_dex; i++) {
        await getPokemon(i);
    }
}

const fetchAlola = async() => {
    clearPokemon(poke_container);
    for(let i = 723; i <= kanto_dex; i++) {
        await getPokemon(i);
    }
}

const fetchGalar = async() => {
    clearPokemon(poke_container);
    for(let i = 810; i <= galar_dex; i++) {
        await getPokemon(i);
    }
}


const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}



function createPokemonCard(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const typing = pokemon.types.map(typing => typing.type.name).join("/");
    const type1 = pokemon.types[0].type.name;
    let color1 = colors[type1];
    let type2;
    let color2;

    if(pokemon.types.length > 1) {
        type2 = pokemon.types[1].type.name;
        color2 = colors[type2];
    }

    if(color2 == null) {
        color2 = color1;
    }
	
	pokemonElement.style.background = `linear-gradient(to left, ${color1}, ${color2})`;

    const pokeInnerHtml = `
        <div class = "img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
        </div>
        <div class = "info">
            <span class="number">#${pokemon.id.toString().padStart(3,'0')}<span>
            <h3 class="name">${name}<h3>
            <small class="type">Type: <span>${typing}</span></small>
        </div>
    `;

    pokemonElement.innerHTML = pokeInnerHtml;

    poke_container.appendChild(pokemonElement);
}

function clearPokemon(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    toggleButtons();
}

function toggleButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.disabled = true;
      });

      setTimeout(function(){document.querySelectorAll('button').forEach(button => {
        button.disabled = false;
      });}, 3000);
}