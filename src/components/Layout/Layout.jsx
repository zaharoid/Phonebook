import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';
import { Oval } from 'react-loader-spinner';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <main>
      <AppBar />
      {/* <Container> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* </Container> */}
    </main>
  );
};
