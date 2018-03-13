import React from 'react';
import SearchBar from './SearchBar';
import ArtistDetails from './Artist-details';
import ArtistList from './Artist-list';

const ArtistaDefault = [{name : 'lulu', bio : 'programo, aprendo y desaprendo lo mas rápido que puedo, mientras menos tech mas sugar', url : 'lulu.jpg' , canciones : ['js', 'react', 'jquery']}];

const Artistas = [
  {name : 'Shakira', bio : 'cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana', url : 'shakira.jpg' , canciones : ['ojos asi', 'tu', 'inevitable']},
  {name : 'Thalia', bio : 'cantante, compositora, actriz, empresaria y modelo mexicana', url:'thalia.jpg', canciones:['arrasando', 'amor a la mexicana']},
  {name : 'Jenifer Lopez', bio:'actriz, cantante, bailarina, compositora, productora discográfica, diseñadora de modas, empresaria, productora de televisión, coreógrafa, perfumista y filántropa estadounidense de origen puertorriqueño.', url:'jenifer.jpg', canciones : ['lets get loud','love the cost a thing']},
]

const App = () => (
  <div>
    <SearchBar />
    <ArtistDetails artista = {ArtistaDefault[0]} />
    <ArtistList artistas = {Artistas} />
  </div>
)

export default App
