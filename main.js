function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
  return parent.appendChild(el);
  }
  let Pokemon;
  let peopleArray = []
  var numUsers = 960;
  let url = `https://pokeapi.co/api/v2/pokemon/?limit=${numUsers}`
  const ul = document.getElementById('people');
  fetch( url )
  .then((resp) => resp.json())
  .then(function(data) {
    Pokemon = data;
    getRandomPokemon(Pokemon)
  });


  function getRandomPokemon(){
    let a = Math.floor(Math.random()*(Pokemon.results.length +1))
    console.log(Pokemon.results[a].name)
    // document.getElementById('pokemon').innerHTML = Pokemon.results[0].name
    fetch(Pokemon.results[a].url)
    .then((resp) => resp.json())
    .then(function(pokeData) {
        console.log(pokeData);
        
        if(pokeData.sprites.front_shiny != null){
            document.getElementById('pokeImg').src = pokeData.sprites.front_shiny
        } else {
            getRandomPokemon()
        }
    // console.log(Pokemon)
    // document.getElementById('pokemon').innerHTML = Pokemon.results[0].name
    })
  }