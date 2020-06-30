import { AsyncComponent } from '../utils';

export const routes = [
  {
    component: AsyncComponent(() => import('../components/Page/Gallery')),
    path: '/',
    exact: true,
  },
];
