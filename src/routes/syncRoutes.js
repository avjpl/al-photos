import Home from '../components/Page/Home';
import Gallery from '../components/Page/Gallery';
import About from '../components/Page/About';
import Contact from '../components/Page/Contact';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  },
  {
    component: Gallery,
    path: '/gallery',
    exact: true,
  },
  {
    component: Contact,
    path: '/contact',
    exact: true,
  },
];
