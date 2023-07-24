import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
// import classes from './Root.module.css';

function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root