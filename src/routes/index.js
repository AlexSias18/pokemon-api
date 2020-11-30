import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes= {
  '/':Home,
  '/:id':Character
}

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ;
  content.innerHTML = await render();

};

export default router;