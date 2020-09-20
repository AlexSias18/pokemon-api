import getData from '../utils/getData';


const Home = async () => {
  const characters = await getData();
  let hash = 
    characters.results.map(character =>{
     let url= character.url;
     let aver= url.slice(33);
     return aver;
    });
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.url.slice(34)}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${character.url.slice(33,-1)}.png" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;