import React, {
	Component
} from 'react';
import PokemonList from './pokemon.jsx';

class PokeApp extends Component {
	render() {
		return <div className ='PokeApp'>
			<h1> The Kanto Pokedex </h1> 
            <PokemonList/>
            </div>;
	}
}
module.exports = PokeApp;
