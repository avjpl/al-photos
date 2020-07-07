import { AsyncComponent } from '../utils';

export const routes = [
  {
    component: AsyncComponent(() => import('../components/Page/Home')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Page/Gallery')),
    path: '/gallery',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Page/About')),
    path: '/about',
    exact: true,
  },
  {
    component: AsyncComponent(() => import('../components/Page/Contact')),
    path: '/contact',
    exact: true,
  },
];
