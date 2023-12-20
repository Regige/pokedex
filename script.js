let allPokemon;
let pokemons = [];
let currentPokemon;
let amountLoadedPokemon;

async function init() {
    await loadAllPokemon();
    emptyContent();
    await loadPokemons(0,51);
}

async function refreshPage() {
    emptyContent(); 
    await loadPokemons(0,51); 
    showButton();
}


async function loadAllPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    let respons = await fetch(url);
    allPokemon = await respons.json();

    addAllPokemonToArray();
}

function addAllPokemonToArray() {
    for (let i = 0; i < allPokemon['results'].length; i++) {
        let pokemonNames = allPokemon['results'][i]['name'];
        pokemons.push(pokemonNames);
    }
}


function emptyContent() {
    let content = document.getElementById('content');
    content.innerHTML = "";

    amountLoadedPokemon = 51;
}


async function loadPokemons(a,b) {
    for (let i = a; i < b; i++) {
        let urlCurrentPokemon = allPokemon['results'][i]['url']
        let respons = await fetch(urlCurrentPokemon);
        currentPokemon = await respons.json();
        
        renderPokedexCards(i);
    }
}


function loadMorePokemon() {
    let fromPokemon = amountLoadedPokemon;

    if(amountLoadedPokemon<pokemons.length) {
    amountLoadedPokemon = amountLoadedPokemon+50;
    loadPokemons(fromPokemon,amountLoadedPokemon);
    } if(amountLoadedPokemon == pokemons.length) {
        document.getElementById('bt-more').classList.add('d-none');
    }
}


// Render Pokedex

function renderPokedexCards(i) {
    renderPokedexCardsHTML(i);
    getHeadInfo(i);
}


function getHeadInfo(i) {
    let pokemonName = currentPokemon['name'];
    document.getElementById(`pokemonName-${i}`).innerHTML = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    getImageInfo(i);
    getTypesInfo(i);
}

function getImageInfo(i) {
    let popupBg = document.getElementById('popupBg');

    if(popupBg.classList.contains('d-none')) {
    document.getElementById(`pokemonImage-cl-${i}`).src = currentPokemon['sprites']['other']['dream_world']['front_default'];  
    } else {
    document.getElementById(`pokemonImage-op-${i}`).src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    };
}

function getTypesInfo(i) {
    for (let k = 0; k < currentPokemon['types'].length; k++) {
        const type = currentPokemon['types'][k];
        document.getElementById(`types-${i}`).innerHTML += `<div class="type">${type['type']['name']}</div>`;  
    }

    getBgColor(i);

}


function getBgColor(i) {
    let firstType = currentPokemon['types'][0]['type']['name'];
    let element = document.getElementById(`pokedex-head-${i}`);
    if(firstType == 'grass') {
        element.classList.add('cl-grass');
    } if(firstType == 'fire') {
        element.classList.add('cl-fire');
    } if (firstType == 'water') {
        element.classList.add('cl-water'); 
    } if (firstType == 'bug') {
        element.classList.add('cl-bug');
    } if (firstType == 'normal') {
        element.classList.add('cl-normal'); 
    } if (firstType == 'normal') {
        element.classList.add('cl-normal'); 
    } if (firstType == 'poison') {
        element.classList.add('cl-poison'); 
    } if (firstType == 'electric') {
        element.classList.add('cl-electric'); 
    } if(firstType == 'ground') {
        element.classList.add('cl-ground'); 
    } if(firstType == 'fairy') {
        element.classList.add('cl-fairy'); 
    } if(firstType == 'fighting') {
        element.classList.add('cl-fighting');
    } if(firstType == 'psychic') {
        element.classList.add('cl-psychic');
    } if(firstType == 'rock') {
        element.classList.add('cl-rock');
    } if(firstType == 'ghost') {
        element.classList.add('cl-ghost');
    } if(firstType == 'ice') {
        element.classList.add('cl-ice');
    } if(firstType == 'dark') {
        element.classList.add('cl-dark');
    } if(firstType == 'dragon') {
        element.classList.add('cl-dragon');
    } if(firstType == 'steel') {
        element.classList.add('cl-steel');
    } if(firstType == 'flying') {
        element.classList.add('cl-flying');
    }
}


// Open Card with full info

async function loadClickedPokemon(i) {
    let pokemon = pokemons[i];
        
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let respons = await fetch(url);
    currentPokemon = await respons.json();

    openPokedexInfo(i);
}


function openPokedexInfo(i) {
    let popupBg = document.getElementById('popupBg');
    popupBg.classList.remove('d-none');

    renderOpenPokedexInfoHTML(i);

    document.getElementById(`pokedex-head-${i}`).style.height = '360px';
    getHeadInfo(i);
    showId(i);
    renderAboutCon(i);
}

function showId(i) {
    let idElement = document.getElementById(`id-${i}`);
    if(i<=8) {
        idElement.innerHTML = `#00${i+1}`;
    } if(i>=9 && i<99) {
        idElement.innerHTML = `#0${i+1}`;   
    } else if(i>=99){
        idElement.innerHTML = `#${i+1}`;  
    } 
}

function renderAboutCon(i) {
    document.getElementById('about-info').style.color = 'black';
    document.getElementById('stats-info').style.color = 'gray';
    let aboutContainer = document.getElementById(`data-container-${i}`);
    aboutContainer.innerHTML = "";
    renderAboutConHTML(i, aboutContainer);

    getAboutInfo(i);
}


function renderStatsCon(i) {
    document.getElementById('stats-info').style.color = 'black';
    document.getElementById('about-info').style.color = 'gray';
    let aboutContainer = document.getElementById(`data-container-${i}`);
    aboutContainer.innerHTML = "";
    renderStatsConHTML(i, aboutContainer);
        
    getStatsInfo(i);
}


function getAboutInfo(i) {
    document.getElementById(`about-h-${i}`).innerHTML = `${(currentPokemon['height']*0.1).toFixed(2).replace('.',',')} m`;
    document.getElementById(`about-w-${i}`).innerHTML = `${(currentPokemon['weight']*0.1).toFixed(2).replace('.',',')} kg`;

    for (let j = 0; j < currentPokemon['abilities'].length; j++) {
        const abilitie = currentPokemon['abilities'][j];
        
        document.getElementById(`about-a-${i}`).innerHTML +=`<span>
        ${abilitie['ability']['name']}</span>`;
    }
}


function getStatsInfo(i) {
    document.getElementById(`stats-HP-${i}`).innerHTML = currentPokemon['stats']['0']['base_stat'];
    document.getElementById(`stats-At-${i}`).innerHTML = currentPokemon['stats']['1']['base_stat'];
    document.getElementById(`stats-De-${i}`).innerHTML = currentPokemon['stats']['2']['base_stat'];
    document.getElementById(`stats-Atk-${i}`).innerHTML = currentPokemon['stats']['3']['base_stat'];
    document.getElementById(`stats-Def-${i}`).innerHTML = currentPokemon['stats']['4']['base_stat'];
    document.getElementById(`stats-Sp-${i}`).innerHTML = currentPokemon['stats']['5']['base_stat'];

    editProgressBar(i);
}

function editProgressBar(i) {
    document.getElementById(`progress-HP-${i}`).style = `width: ${currentPokemon['stats']['0']['base_stat']}%`;
    document.getElementById(`progress-At-${i}`).style = `width: ${currentPokemon['stats']['1']['base_stat']}%`;
    document.getElementById(`progress-De-${i}`).style = `width: ${currentPokemon['stats']['2']['base_stat']}%`;
    document.getElementById(`progress-Atk-${i}`).style = `width: ${currentPokemon['stats']['3']['base_stat']}%`;
    document.getElementById(`progress-Def-${i}`).style = `width: ${currentPokemon['stats']['4']['base_stat']}%`;
    document.getElementById(`progress-Sp-${i}`).style = `width: ${currentPokemon['stats']['5']['base_stat']}%`;
}


// Close Popup Window - clicked Pokemon

function closePopup() {
    document.getElementById('popupBg').classList.add('d-none');
    let popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = "";
}

function stopClosing(event) {
    event.stopPropagation();
}


// Search Pokemon

function searchPokemon(event) {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    
    if (event.key === "Enter" && search.trim() !== '') {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];

            if(pokemon.includes(search)) {
                searchPokemonData(pokemon, i);
            }
        }
    }
}

async function searchPokemonData(pokemon, i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let respons = await fetch(url);
    currentPokemon = await respons.json();
    
    emptyContent();
    renderPokedexCards(i);
    document.getElementById('bt-more').classList.add('d-none');
}

function showButton() {
    document.getElementById('bt-more').classList.remove('d-none');
}