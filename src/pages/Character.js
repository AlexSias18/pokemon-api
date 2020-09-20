import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id= getHash();
  const character = await getData(id);
  
  const view= `
    <div class="Characters-inner">
      
      <article class="Characters-card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="${character.name}">
          
      </article>
      <article class="Characters-card">
        <h2>${character.name}</h2>
        <h3>Experiencia Base: ${character.base_experience}</h3>
          <h3>Altura: ${character.height/10}&nbsp;m </h3>
          <h3>Peso: ${character.weight/10}&nbsp;kg</h3>
          <h3></h3>
          <h3>Habilidad Principal: ${character.abilities[0].ability.name}</h3>
          <h3>Habilidad Secundaria: ${character.abilities[1].ability.name}</h3>
          <h3>Stats:</h3>
          <ul class="stats">
            <li>HP: ${character.stats[0].base_stat}</li>
            <li>Attack: ${character.stats[1].base_stat}</li>
            <li>Defense: ${character.stats[2].base_stat}</li>
            <li>Special Attack: ${character.stats[3].base_stat}</li>
            <li>Special Defense: ${character.stats[4].base_stat}</li>  
            <li>Speed: ${character.stats[5].base_stat}</li>
          </ul>
      </article>
    </div>
  `;
  return view;

};

export default Character;