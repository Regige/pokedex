// render HTML Content

function renderPokedexCardsHTML(i) {
    let content = document.getElementById('content');
    content.innerHTML += /*html*/`
    <div onclick="loadClickedPokemon(${i})" class="pokedex-card" id="pokedex-card-${i}">
        <div class="pokedex-head" id="pokedex-head-${i}">
            <div class="pokedex-head-text"> 
                <h2 id="pokemonName-${i}"></h2>
                <div class="types" id="types-${i}"></div>
            </div>
            <img class="pokemonImage-cl" alt="" id="pokemonImage-cl-${i}" />
        </div>
    </div>`;
}


function renderOpenPokedexInfoHTML(i) {
    let popupCard = document.getElementById('popupCard');
    popupCard.innerHTML = /*html*/`
        <div class="pokedex-head" id="pokedex-head-${i}"> 
            <div class="pokedex-head-text"> 
                <h2 id="pokemonName-${i}"></h2>
                <div class="types-op" id="types-${i}"></div>
                <div id="id-${i}" class="id-element"></div>
            </div>
        </div>
        <div id="info-container-${i}" class="info-container">
          <img class="pokemonImage-op" alt="" id="pokemonImage-op-${i}" />
          <div class="info-container-data">
            <nav class="nav-info-con">
                <a onclick="renderAboutCon(${i})" id="about-info">About</a>
                <a onclick="renderStatsCon(${i})" id="stats-info">Base Stats</a>
            </nav>
          <hr class="hr-nav" />
          <div id="data-container-${i}" class="data-con"></div></div>
        </div>`;
}


function renderAboutConHTML(i, aboutContainer) {
    aboutContainer.innerHTML = /*html*/`
        <div class="data-con-div">
            <div class="data-con-div-att">Height</div>
            <span id="about-h-${i}"></span>
        </div>
        <div class="data-con-div">
            <div class="data-con-div-att">Weight</div>
            <span id="about-w-${i}"></span>
        </div>
        <div class="data-con-div">
            <div class="data-con-div-att">Abilities</div>
            <span id="about-a-${i}" class="about-a"></span>
        </div>`;
}


function renderStatsConHTML(i, aboutContainer) {
    aboutContainer.innerHTML = /*html*/`
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">HP</div>
            <span id="stats-HP-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-HP-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">Attack</div>
            <span id="stats-At-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-At-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">Defense</div>
            <span id="stats-De-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-De-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">Sp. Atk</div>
            <span id="stats-Atk-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-Atk-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">Sp. Def</div>
            <span id="stats-Def-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-Def-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>
        <div class="data-con-div stats-con">
            <div class="data-con-div-att">Speed</div>
            <span id="stats-Sp-${i}"></span>
            <div class="progress bar-wid">
                <div id="progress-Sp-${i}" class="progress-bar bar-color"></div>
            </div>
        </div>`;
}