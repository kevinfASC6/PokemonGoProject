function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
  return parent.appendChild(el);
  }

  var map;

  function initMap(){

   map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat:1,lng:1}
        });
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
    for(let i=0; i<50;i++){
    getRandomPokemon(Pokemon)
    }
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
            var myLatLng = {lat: -90 + Math.random() * 180, lng: -180 + Math.random() * 360};
            var iconBase = pokeData.sprites.front_shiny
            var marker = new google.maps.Marker({
            position: myLatLng,
            icon: iconBase,
            map: map
            });
        } else {
            getRandomPokemon()
        }
    })
  }