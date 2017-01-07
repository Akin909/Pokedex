import {render} from 'react-dom';
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

//This component will show an individual Pokemon monster i.e its image
//and its name
class Pokemon extends Component{
render(){
const {pokemon,id} = this.props;
return <div className="pokemon--species">
    <div className="pokemon--species---container">
        <div className="pokemon--species--sprite">
            <img src={`./sprites/${id}.png`} alt=""/>
        </div>
        <div className="pokemon--species--name">{pokemon.name}</div>
    </div>
</div>
}
}
//The Pokemon list component shows nothing when it mounts at firt but before it
    //mounts it makes an API call to fetch the first 151 pokemon and ddisplays
    //them using the Pokemon component
class PokemonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            species : [],
            fetched: false, 
            loading: false, 
        };
    }
    componentWillMount(){
        this.setState({
            loading: true
        });
        fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
            .then( res => res.json()).then( response => {
            this.setState({
                species : response.results,
                loading : true,
                fetched : true 
            });
        });
    }
        render(){
            const {fetched, loading, species} = this.state;
            let content;
            if (fetched){
                content = <div className= 'pokemon--species--list'>{
                species.map((pokemon,index)=>
                    <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)
                }
                    </div>
            }else if (loading && !fetched){
               content = <p>Loading...</p>
            } else {
                content = <div/>
            }
            return <div>
                {content}
            </div>;
        }
    }
module.exports = PokemonList;
